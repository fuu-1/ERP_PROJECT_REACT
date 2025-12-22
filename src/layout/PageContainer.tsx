import "./PageContainer.css";

type Props = {
    title?: string;
    children: React.ReactNode;
};

const PageContainer = ({ title, children }: Props) => {
    return (
        <div className="page-container">
            <div className="page-box">
                {title && <h2 className="page-title">{title}</h2>}
                {children}
            </div>
        </div>
    );
};

export default PageContainer;
