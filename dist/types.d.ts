interface DataSource {
    id: number;
    dataURL: string;
}
interface RIUploaderProps {
    isOpen: boolean;
    hideModal: () => void;
    onUpload: (e: any) => void;
    onSelect: (e: any) => void;
    onRemove: (e: any) => void;
    warnMessage: string;
    dataSources: DataSource[];
}
export default RIUploaderProps;
