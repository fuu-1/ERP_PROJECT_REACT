type Props = {
    title?: string;
    children: React.ReactNode;
};

const PageContainer = ({ title, children }: Props) => {
    return (
        <div className="container mt-5">
            <div className="bg-white border rounded p-4">
                {title && <div className="fs-3 fw-bold mb-3">{title}</div>}
                {children}
            </div>
        </div>
    );
};

export default PageContainer;