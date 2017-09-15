import addSeconds from 'date-fns/add_seconds';
import differenceInSeconds from 'date-fns/difference_in_seconds';

export function secondsFromNow(seconds) {
    const result = addSeconds(Date.now(), seconds);
    return result.getTime();
}

export function secondsLeft(from, to) {
    return differenceInSeconds(to, from);
}
