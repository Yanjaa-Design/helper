import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, MessageCircle } from 'lucide-react'

const urls = {
  repo: 'https://github.com/itinhelper/ITINHelper',
  releases: 'https://github.com/itinhelper/ITINHelper/releases',
  issues: 'https://github.com/itinhelper/itinhelper/issues',
  twitter: 'https://twitter.com/itinhelperorg',
  discord: 'https://discord.gg/itinhelper',
  aidan: 'https://github.com/thegrims',
  zak: 'https://github.com/zakpatterson',
  startPage: '/info'
}

export default function GettingStarted() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">ITIN Helper</h1>
      <p className="mb-4">
        ITIN Helper is an open source application designed to assist individuals in obtaining an Individual Taxpayer Identification Number (ITIN). It guides users through the process of completing Form W-7, Application for IRS Individual Taxpayer Identification Number. ITIN Helper is provided free of charge and requires no sharing of personal data.
      </p>
      <p className="mb-6">
        Interested in using ITIN Helper? The supported forms, documentation requirements, and eligibility criteria are provided below.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Supported Forms</h2>
      <p className="mb-2">ITIN Helper supports the following forms:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Form W-7, Application for IRS Individual Taxpayer Identification Number</li>
        <li>Supporting documentation checklist</li>
        <li>ITIN renewal application assistance</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Documentation Requirements</h2>
      <p className="mb-2">ITIN Helper guides you through gathering the following required documents:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Proof of identity (e.g., passport, national ID card)</li>
        <li>Proof of foreign status</li>
        <li>Additional supporting documents based on your specific situation</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
      <p className="mb-2">ITIN Helper can assist you if you meet the following criteria:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>You do not have and are not eligible for a Social Security Number</li>
        <li>You have a requirement to obtain an IRS individual taxpayer identification number to file a U.S. tax return or are claimed as a dependent on a U.S. tax return</li>
        <li>You are a nonresident alien required to file a U.S. tax return</li>
        <li>You are a U.S. resident alien filing a U.S. tax return</li>
        <li>You are a dependent or spouse of a U.S. citizen/resident alien</li>
        <li>You are a dependent or spouse of a nonresident alien visa holder</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button asChild>
          <Link href={urls.startPage}>Start ITIN Application</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={urls.releases}>Download Desktop Version</Link>
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Get Involved!</h2>
      <p className="mb-4">
        The success of this project depends on user feedback. If you notice any
        issues or have suggestions for improvement, please reach out to us!
      </p>
      <Card>
        <CardContent className="p-6">
          <ul className="space-y-2">
            <li>
              <Link href={urls.issues} className="flex items-center hover:underline">
                <Github className="mr-2 h-4 w-4" />
                File an issue on GitHub
              </Link>
            </li>
            <li>
              <Link href={urls.twitter} className="flex items-center hover:underline">
                <Twitter className="mr-2 h-4 w-4" />
                Message us on Twitter
              </Link>
            </li>
            <li>
              <Link href={urls.discord} className="flex items-center hover:underline">
                <MessageCircle className="mr-2 h-4 w-4" />
                Join our Discord channel
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      <p className="mt-6">
        ITIN Helper is an open source project maintained by{' '}
        <Link href={urls.aidan} className="text-primary hover:underline">Aidan Grimshaw</Link> and{' '}
        <Link href={urls.zak} className="text-primary hover:underline">Zak Patterson</Link>.
      </p>
      <p className="mb-6">
        Contributions to the <Link href={urls.repo} className="text-primary hover:underline">GitHub</Link> repository are
        welcome.
      </p>

      <Link href="https://www.netlify.com" className="inline-block">
        <Image
          src="/placeholder.svg?height=51&width=114"
          width={114}
          height={51}
          alt="Deploys by Netlify"
          className="dark:invert"
        />
      </Link>
    </div>
  )
}
