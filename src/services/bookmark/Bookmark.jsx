import axios from "axios";

export const addBookmarkForUser = async (articleId) => {
    try {
        const res = await axios.post(`/api/bookmark/articles/user/${articleId}`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("Bookmark added successfully");
        return res.data;
    } catch (error) {
        console.error("Error adding bookmark", error);
        return null;
    }
};

export const deleteBookmarkForUser = async (articleId) => {
    try {
        const res = await axios.delete(`/api/bookmark/articles/user/${articleId}`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("Bookmark deleted successfully");
        return res.data;
    } catch (error) {
        console.error("Error deleting bookmark", error);
        return null;
    }
};

export const checkBookmark = async (articleId) => {
    try {
        const res = await axios.get(`/api/bookmark/articles/user/${articleId}`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return true; 
    } catch (error) {
        console.error("Error checking bookmark", error);
        return false;
    }   
};