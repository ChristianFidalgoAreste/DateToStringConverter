import { DateToStringConverter } from '../models/DateToStringConverter';
import { describe, it, expect } from 'vitest';
import { HandlerFactory } from '../models/handlers/HandlerFactory';

describe('The transformDateToString function', () => {
    it.each`
        date          | expectedOutput
        ${new Date('11/29/23')} | ${'Today'}
        ${new Date('11/28/23')} | ${'Yesterday'}
        ${new Date('11/27/23')} | ${'Last 7 days'}
        ${new Date('11/26/23')} | ${'Last 7 days'}
        ${new Date('11/25/23')} | ${'Last 7 days'}
        ${new Date('11/24/23')} | ${'Last 7 days'}
        ${new Date('11/23/23')} | ${'Last 7 days'}
        ${new Date('11/22/23')} | ${'Last 30 days'}
        ${new Date('11/21/23')} | ${'Last 30 days'}
        ${new Date('11/11/23')} | ${'Last 30 days'}
        ${new Date('11/01/23')} | ${'Last 30 days'}
        ${new Date('10/31/23')} | ${'Last 30 days'}
        ${new Date('10/30/23')} | ${'Old'}
        ${new Date('10/22/23')} | ${'Old'}
        ${new Date('10/21/23')} | ${'Old'}
        ${new Date('10/20/23')} | ${'Old'}
        ${new Date('10/15/23')} | ${'Old'}
        ${new Date('07/07/19')} | ${'Old'}
        ${new Date('12/15/17')} | ${'Old'}
    `(
        'should return $expectedOutput if input is $date',
        ({date, expectedOutput}) => {
            const handlerFactory = new HandlerFactory();
            const dateToStringConverter = new DateToStringConverter(handlerFactory);

            expect(dateToStringConverter.transformDateToString(date)).toBe(expectedOutput);
        }
    )
})