interface CCardProps {
    index: number;
    imageURL: string;
    checked?: boolean;
    onChange: (e: any) => void;
    onRemove: (e: any) => void;
}
export default CCardProps;
