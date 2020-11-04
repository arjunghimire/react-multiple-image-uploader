/// <reference types="react" />
interface CModalProps {
    title?: string | JSX.Element;
    footer?: JSX.Element;
    visible?: boolean;
    onCancel?: () => void;
    onOk?: () => void;
    children?: JSX.Element;
}
export default CModalProps;
