import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary
  extends React.Component<
    Props,
    State
  > {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="
            flex
            min-h-screen
            items-center
            justify-center
            p-6
          "
        >
          <div
            className="
              rounded-3xl
              bg-white
              p-8
              shadow-sm
            "
          >
            <h1
              className="
                text-2xl
                font-bold
              "
            >
              Xatolik yuz berdi
            </h1>

            <p
              className="
                mt-2
                text-gray-500
              "
            >
              Ilovani qayta yuklang
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}