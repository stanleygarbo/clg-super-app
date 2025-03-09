export const convertMilitaryTo12Hour = (time: string): string => {
    let [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const formatMinutes = String(minutes).padStart(2, "0")
    return `${String(hours).padStart(2, "0")}:${formatMinutes} ${period}`;
};

export const capitalizeFirstLetter = (text: string): string => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
}