import { ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useMediaQuery } from '@material-ui/core'
import { StartButtons, SingleButtons } from './pager'
import { isWeb } from 'ustaxes/core/util'

const urls = {
  repo: 'https://github.com/ustaxes/UsTaxes',
  releases: 'https://github.com/ustaxes/UsTaxes/releases',
  issues: 'https://github.com/ustaxes/ustaxes/issues',
  twitter: 'https://twitter.com/ustaxesorg',
  discord: 'https://discord.gg/dAaz472mPz',
  aidan: 'https://github.com/thegrims',
  zak: 'https://github.com/zakpatterson',
  startPage: '/info'
}

const doubleButtons: ReactElement = (
  <StartButtons
    firstText={'Start ITIN Application'}
    firstUrl={urls.startPage}
    secondText={'Download Desktop Version'}
    secondUrl={urls.releases}
  />
)
const singleButtons: ReactElement = (
  <SingleButtons text={'Start ITIN Application'} url={urls.startPage} />
)

export default function GettingStarted(): ReactElement {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  return (
    <>
      <Helmet>
        <title>Getting Started | ITIN Helper</title>
      </Helmet>
      <h1>ITIN Helper</h1>
      <p>
        ITIN Helper is an open source application designed to assist individuals
        in obtaining an Individual Taxpayer Identification Number (ITIN). It guides
        users through the process of completing Form W-7, Application for IRS
        Individual Taxpayer Identification Number. ITIN Helper is provided free of
        charge and requires no sharing of personal data.
      </p>
      <p>
        Interested in using ITIN Helper? The supported forms, documentation
        requirements, and eligibility criteria are provided below.
      </p>
      <h2>Supported Forms</h2>
      ITIN Helper supports the following forms:
      <ul>
        <li>Form W-7, Application for IRS Individual Taxpayer Identification Number</li>
        <li>Supporting documentation checklist</li>
        <li>ITIN renewal application assistance</li>
      </ul>
      <h2>Documentation Requirements</h2>
      ITIN Helper guides you through gathering the following required documents:
      <ul>
        <li>Proof of identity (e.g., passport, national ID card)</li>
        <li>Proof of foreign status</li>
        <li>Additional supporting documents based on your specific situation</li>
      </ul>
      <h2>Eligibility Criteria</h2>
      ITIN Helper can assist you if you meet the following criteria:
      <ul>
        <li>You do not have and are not eligible for a Social Security Number</li>
        <li>
          You have a requirement to obtain an IRS individual taxpayer identification
          number to file a U.S. tax return or are claimed as a dependent on a U.S.
          tax return
        </li>
        <li>You are a nonresident alien required to file a U.S. tax return</li>
        <li>You are a U.S. resident alien filing a U.S. tax return</li>
        <li>You are a dependent or spouse of a U.S. citizen/resident alien</li>
        <li>You are a dependent or spouse of a nonresident alien visa holder</li>
      </ul>
      <h2>Get Started</h2>
      {isWeb() ? doubleButtons : singleButtons}
      <h2>Get Involved!</h2>
      <p>
        The success of this project depends on user feedback. If you notice any
        issues at all with the project, please reach out to us!
      </p>
      <ul>
        <li>
          File an issue: <Link href={urls.issues}>GitHub Issues</Link>
        </li>
        <li>
          Message us on <Link href={urls.twitter}>Twitter</Link>
        </li>
        <li>
          Think you have something to contribute? Come to our{' '}
          <Link href={urls.discord}>Discord channel</Link>.
        </li>
      </ul>
      <p>
        ITIN Helper is an open source project maintained by{' '}
        <Link href={urls.aidan}>Aidan Grimshaw</Link> and{' '}
        <Link href={urls.zak}>Zak Patterson</Link>.
      </p>
      <p>
        Contributions to the <Link href={urls.repo}>GitHub</Link> repository are
        welcome.
      </p>
      <a href="https://www.netlify.com">
        <img
          src={prefersDarkMode ? 'netlify-dark.svg' : 'netlify-light.svg'}
          alt="Deploys by Netlify"
        />
      </a>
    </>
  )
}
