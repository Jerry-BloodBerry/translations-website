const WorkWithUsStep = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mt-10 w-full md:max-w-[300px] px-4 pt-12 pb-8 mb-8 mx-auto border-2 border-[#477050] bg-white rounded-xl">
      {children}
    </div>
  )
}

const WorkWithUsTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-4 text-lg font-bold text-center">{children}</div>
}

const WorkWithUsIcon = ({
  icon,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) => {
  const Icon = icon
  return (
    <div className="absolute -top-[40px] left-[50%] translate-x-[-50%] h-[90px] w-[90px] mx-auto bg-white border-[#477050] border-4 rounded-full text-black text-center">
      <Icon className="size-12 text-black mx-auto mt-4" />
    </div>
  )
}

const WorkWithUsContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-4 text-center">{children}</div>
}

WorkWithUsStep.Title = WorkWithUsTitle
WorkWithUsStep.Icon = WorkWithUsIcon
WorkWithUsStep.Content = WorkWithUsContent

export default WorkWithUsStep
