import React from "react";

type FormProps = {
    method?: "GET" | "POST" | "PUT" | "DELETE" | string;
    action?: string;
    className?: string;
    children: React.ReactNode;
};

export const Form: React.FC<FormProps> = ({
                                              method = "GET",
                                              action = "",
                                              className = "max-w-2xl mx-auto space-y-6",
                                              children,
                                          }) => {
    const isGet = method.toUpperCase() === "GET";
    const spoofMethod = !isGet ? method.toUpperCase() : undefined;

    return (
        <form
            method={isGet ? "GET" : "POST"}
            action={action}
            className={className}
        >
            {!isGet && (
                <>
                    {/* В реальном приложении CSRF-токен должен приходить из props или контекста */}
                    <input type="hidden" name="_token" value="CSRF_TOKEN_PLACEHOLDER" />
                    <input type="hidden" name="_method" value={spoofMethod} />
                </>
            )}

            {children}
        </form>
    );
};
