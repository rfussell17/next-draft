const Why = () => {
  return (
    <div data-navbar-color="light" className="py-16 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            What makes Draft.dev different?
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  We work exclusively with companies that are trying to reach
                  software developers, data engineers, and DevOps practitioners.
                  Typically, our clients are Developer Relations or Developer
                  Marketing teams at companies with 50+ employees or at least
                  Series A funding.
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  We specialize in producing technical content (mostly tutorials
                  and blog posts), but we can also help you create a content
                  plan, come up with suitable topics, or execute on one-time
                  content projects like ebooks.
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  Our goal is to create high-quality, technically-deep content.
                  Subject-matter experts are assigned to each article, so every
                  piece is detailed and authoritative. Our core team includes
                  experienced engineers and editors who make sure that every
                  piece of content comes to you ready to publish.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Why
