"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import type { MouseEventHandler, FC } from "react";

const ThemeToggle: FC = () => {
    const { theme, toggleTheme } = useTheme();

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        toggleTheme();
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={handleClick}
            data-testid="button-theme-toggle"
            aria-label="Toggle theme"
        >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
    );
};

export default ThemeToggle;
