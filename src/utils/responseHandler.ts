import { Status, Message } from "../errors";

type MessageKey = keyof typeof Message;
type StatusKey = keyof typeof Status;

export const handleResponse = (set: {
    headers: Record<string, string>;
    status?: number | undefined;
    redirect?: string | undefined;
}, status: StatusKey, message: MessageKey) => {
    set.status = parseInt(status);
    return { message: Message[message] };
};