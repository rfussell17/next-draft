import Link from 'next/link'

const Why = () => {
  return (
    <div data-navbar-color="light" className="py-16 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            Turn Technical Content into Growth
          </h2>

          <h3 className="paragraph-dark py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            nostrum voluptatem ducimus id explicabo, quo, voluptates, numqua.
          </h3>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Strategic Content in Every Format
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  We drive awareness by providing blog posts, eBooks and video
                  tutorials at a consistent cadence, freeing up your marketers
                  and developers to focus on other priorities. We also suggest
                  promotional strategies that place the content in front of your
                  target audience.
                </p>

                <p className="mt-4">
                  <Link
                    href="/company"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    Our Business to Business Marketing Agency
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                For Marketers and DevRels
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  Whether you are a Marketer that needs help with technical
                  content or a DevRel that needs support on the strategic side,
                  we create content that puts your product in a good light,
                  helping drive developer engagement with your business and
                  product.
                </p>

                <p className="mt-4">
                  <Link
                    href="/content-quality"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    Our B2B Tech Marketing
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Enterprise Content Marketing
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  We help enterprises create successful content programs that
                  drive awareness and leads. Our seasoned team of content
                  strategists use proven frameworks to make sure your content
                  delivers the highest ROI for your business.
                </p>

                <p className="mt-4">
                  <Link
                    href="/delivery-process"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    Our Enterprise Content Marketing
                    <span aria-hidden="true"> →</span>
                  </Link>
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
