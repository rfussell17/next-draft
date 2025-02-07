type PageHeaderProps = {
  seoTitle: string
  header: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ seoTitle, header }) => {
  return (
    <header className="relative flex min-h-[400px] overflow-hidden bg-gradient-brand">
      <div className="relative m-auto w-full max-w-7xl px-6">
        <div className="flex min-h-[400px] items-center">
          <div className="max-w-4xl">
            <h1 className="mb-4 font-code text-base font-medium tracking-wider text-gray-200">
              {seoTitle}
            </h1>
            <h2 className="font-code text-4xl font-semibold uppercase tracking-tight text-white md:text-5xl">
              {header}_
            </h2>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader
