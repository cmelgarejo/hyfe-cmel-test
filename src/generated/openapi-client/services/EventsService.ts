/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Event } from '../models/Event';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventsService {

    /**
     * Get events
     * Retrieve a count of cough events associated with a dummy user aggregated by chosen aggregation level within the requested date range
     * @param aggregation
     * @param from
     * @param to
     * @returns Event Successful operation
     * @throws ApiError
     */
    public static getEvents(
        aggregation: 'hour' | 'day' | 'week' | 'month',
        from?: string,
        to?: string,
    ): CancelablePromise<Array<Event>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dummy_cough_events',
            query: {
                'aggregation': aggregation,
                'from': from,
                'to': to,
            },
            errors: {
                400: `Invalid input`,
            },
        });
    }

}
