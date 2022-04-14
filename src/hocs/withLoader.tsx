import React from "react";

interface WithLoader {
  isLoading: boolean;
}

export const withLoader =
  <T extends object>(WrapperdComponent: React.ComponentType<T>) =>
  ({ isLoading, ...props }: T & WithLoader) => {
    if (isLoading)
      return (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            role="status"
          >
            <span className="visually-hidden justify-content-center">
              Loading...
            </span>
          </div>
        </div>
      );

    return <WrapperdComponent {...(props as T)} />;
  };
