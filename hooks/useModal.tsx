import { useState } from "react";

export default function useModal() {
    const [isShown, setIsShown] = useState(false);

    const open: () => void = () => {
        setIsShown(true);
    };
    const close: () => void = () => {
        setIsShown(false);
    };

    return [isShown, open, close];
}
