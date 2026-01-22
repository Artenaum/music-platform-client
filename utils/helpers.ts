export const humanReadableTimeFromSeconds = (seconds: number): string => {
	if (seconds < 60) {
		return `${seconds}s`
	}
	const totalMinutes = Math.floor(seconds / 60)
	const hours = Math.floor(totalMinutes / 60) || 0
	const minutesToDisplay = totalMinutes % 60
	let timeStr = ``
	if (hours > 0) {
		timeStr += `${hours}h`
	}
	timeStr += `${minutesToDisplay}m`

	return timeStr
}