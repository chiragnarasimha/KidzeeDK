import Image from "next/image"
import pentemind_new_img from "@/assets/pentemind_new_img.svg"

type Props = {
  className?: string
}
const PentemindImage = ({ className }: Props) => {
  return (
    <Image
      src={pentemind_new_img}
      alt="Pentemind Image"
      className={className}
    />
  )
}

export default PentemindImage
