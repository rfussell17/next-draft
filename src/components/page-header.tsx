type PageHeaderProps = {
  title: string
  description: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-gradient-brand px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2>{title}</h2>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          {description}
        </p>
      </div>
    </div>
  )
}

export default PageHeader
