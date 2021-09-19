export const MAX_AVATAR_GROUPS = 2;
export const AVATAR_GROUP_STYLE = { color: "#f56a00", backgroundColor: "#fde3cf" };
const AVATAR_STYLES = [
    { backgroundColor: "#1890ff", color: "#fff" },
    { backgroundColor: "#87d068", color: "#fff" },
    { backgroundColor: "#0fa768", color: "#fff" },
    { backgroundColor: "#8f89f3", color: "#fff" },
    { backgroundColor: "#f0af1d", color: "#fff" }
];

export const useMyCocktailsListsComponent = () => {

    const generateIntFromInterval = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };

    const getAvatarStyle = () => {
        return AVATAR_STYLES[ generateIntFromInterval(0, AVATAR_STYLES.length - 1) ];
    };

    return {getAvatarStyle};
};