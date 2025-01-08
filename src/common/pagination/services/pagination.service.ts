import { envs } from '@/core/config';
import { Injectable } from '@nestjs/common';
import { ResponsePaginationDto } from '../dtos/response-pagination.dto';
import { IPaginationProps, PaginationGenerateProps } from '../interfaces';

@Injectable()
export class PaginationService {
  constructor() {}

  generate(props: PaginationGenerateProps): {
    limit: number;
    offset: number;
  } {
    const { page = envs.defaultPage, limit = envs.defaultLimit } = props;

    return {
      limit,
      offset: (page - 1) * limit,
    };
  }

  paginate<T>(props: IPaginationProps<T>): ResponsePaginationDto<T> {
    const {
      total,
      page,
      limit,
      apiRoute,
      apiMethod,
      rows,
      extraParams,
      extraQueries,
    } = props;

    let extraParamsString: string = '';
    let extraQueriesString: string = '';

    if (extraParams) {
      extraParamsString =
        '/' + extraParams.reduce((ac, item) => (ac += `/${item}`));
    }

    if (extraQueries) {
      for (const [key, value] of Object.entries(extraQueries)) {
        extraQueriesString += `&${key}=${value}`;
      }
    }

    return {
      count: rows.length,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      prev:
        page - 1 > 0
          ? `${envs.appUrl}/${apiRoute}/${apiMethod}${extraParamsString}?page=${
              page - 1
            }&limit=${limit}${extraQueriesString}`
          : null,
      next:
        page * limit < total
          ? `${envs.appUrl}/${apiRoute}/${apiMethod}${extraParamsString}?page=${
              page + 1
            }&limit=${limit}${extraQueriesString}`
          : null,
      rows,
    };
  }
}
