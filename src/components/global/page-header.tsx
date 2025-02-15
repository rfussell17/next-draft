type PageHeaderProps = {
  header: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ header }) => {
  return (
    <header className="relative flex min-h-[320px] overflow-hidden bg-gradient-brand">
      <div className="relative m-auto w-full max-w-7xl px-6">
        <div className="flex min-h-[320px] items-center">
          <div className="mt-16">
            <h1 className="subheader-light">{header}</h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader
