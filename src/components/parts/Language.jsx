const Language = ({code, children}) => {
    return (
        <div data-language-code={code}>{children || code}</div>
    );
};

export default Language;