import React from 'react';
import { withPrefix } from 'gatsby'


  // Note: this is an escape hatch and should be used sparingly!
  // Normally they recommend using `import` for getting asset URLs
  // as described in the “Adding Images, Fonts, and Files” page.
export default () => (
    <a
    rel="noopener noreferrer"
    href={withPrefix('/resume.pdf')}
    target="_blank"> Click to see my pdf
    </a>
)
