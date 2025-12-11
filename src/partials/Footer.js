import { cilCode } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'
import GitHubButton from 'react-github-btn'

function Footer({github}) {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4 flex items-center justify-center gap-2">
        <CIcon icon={cilCode} className="w-8 h-8" /> Florent C.
      </p>
      {/* <GitHubButton href={github+"/react-tailwind-portfolio"} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
      &nbsp;&nbsp;
      <GitHubButton href={github+"/react-tailwind-portfolio/fork"} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton> */}
    </div>
  )
}

export default Footer