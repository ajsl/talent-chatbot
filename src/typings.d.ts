interface textBubble {
    direction: string;
    text: string;
    timestamp: Date;
}

interface user {
    id: number;
    displayName: string;
    imageUrl: string;
}

interface messageResponse {
    direction: string;
    message: string;
    date: string;
}