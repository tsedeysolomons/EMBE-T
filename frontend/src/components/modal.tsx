import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  toggleModal: React.ReactNode;

  title: string;
  body: React.ReactNode;
}

const Modal = ({ title, body, toggleModal }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{toggleModal}</DialogTrigger>
      <DialogContent className="max-w-7xl h-full">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{body}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
