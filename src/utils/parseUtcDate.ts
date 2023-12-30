import { formatInTimeZone } from 'date-fns-tz';

/** *
 * isoString: '2022-04-12T12:06:33.365Z'
 */

export const parseISOStringDate = (isoString: string) => {
  return formatInTimeZone(isoString, 'America/Sao_Paulo', 'dd/MM/yyyy');
};
