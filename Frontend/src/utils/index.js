export const requestHandler = async (api, setLoading, onSuccess, onError) => {
  setLoading && setLoading(true);
  try {
    const response = await api();

    const { data } = response;

    if (data?.success) {
      onSuccess && onSuccess(data);
    }
  } catch (error) {
    if ([401, 403].includes(error?.response.data?.statusCode)) {
      localStorage.clear();

      if (isBrowser) window.location.href = "/login";
    }
    onError(error?.response?.data?.message || "Something went wrong");
  } finally {
    setLoading && setLoading(false);
  }
};

// A utility function to concatenate CSS class names with proper spacing
export const classNames = (...className) => {
  // Filter out any empty class names and join them with a space
  return className.filter(Boolean).join(" ");
};

export const isBrowser = typeof window !== "undefined";

export const getChatObjectMetadata = (chat, loggedInUser) => {
  const lastMessage = chat.lastMessage?.content
    ? chat.lastMessage?.content
    : chat.lastMessage
    ? `${chat.lastMessage?.attachments?.length} attachment${
        chat.lastMessage.attachments.length > 1 ? "s" : ""
      }`
    : "No messages yet";

  if (chat.isGroupChat) {
    return {
      avatar: "https://via.placeholder.com/100x100.png",
      title: chat.name,
      description: `${chat.participants.length} members in the chat`,

      lastMessage: chat.lastMessage
        ? chat.lastMessage?.sender?.username + ": " + lastMessage
        : lastMessage,
    };
  } else {
    const participant = chat.participants.find(
      (p) => p._id !== loggedInUser?._id
    );

    return {
      avatar: participant?.avatar.url,
      title: participant?.username,
      description: participant?.email,
      lastMessage,
    };
  }
};

// A class that provides utility functions for working with local storage
export class LocalStorage {
  // Get a value from local storage by key
  static get(key) {
    if (!isBrowser) return;
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (err) {
        return null;
      }
    }
    return null;
  }

  // Set a value in local storage by key
  static set(key, value) {
    if (!isBrowser) return;
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Remove a value from local storage by key
  static remove(key) {
    if (!isBrowser) return;
    localStorage.removeItem(key);
  }

  // Clear all items from local storage
  static clear() {
    if (!isBrowser) return;
    localStorage.clear();
  }
}
