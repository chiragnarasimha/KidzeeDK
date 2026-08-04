import { ReactNode } from "react"

const ContentContainer = ({
  className,
  children,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className="grid place-items-center">
      <div className="w-full max-w-384 px-5">
        <div className={className}>{children}</div>
      </div>
    </div>
  )
}

export default ContentContainer
