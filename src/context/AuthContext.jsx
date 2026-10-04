import { createContext, useContext, useState, } from "react";

const AuthContext =
    createContext();

export const AuthProvider = ({
    children,
}) => {

    const [user, setUser] =
        useState(() => {

            const savedUser =
                localStorage.getItem(
                    "user"
                );

            return savedUser
                ? JSON.parse(savedUser)
                : null;
        });

    const login = (
        email,
        password
    ) => {

        if (
            !email ||
            !password
        ) {
            return {
                success: false,
                message:
                    "Email and password are required.",
            };
        }

        const loggedInUser = {
            email,
        };

        setUser(loggedInUser);

        localStorage.setItem(
            "user",
            JSON.stringify(
                loggedInUser
            )
        );

        return {
            success: true,
        };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem(
            "user"
        );
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated:
                    Boolean(user),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {

    const context =
        useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
};
