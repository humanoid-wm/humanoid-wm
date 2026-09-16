# Humanoid-WM anonymous project page

A self-contained static research website, prepared for GitHub Pages and double-blind review. No build system, external fonts, analytics, or third-party scripts are required. Code is marked **Coming Soon**.

## Preview

From this directory, run:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765 in a browser. The page also works by opening `index.html` directly.

## Publish with GitHub Pages

1. Use a GitHub account or organization whose public profile, membership, activity, and name do not identify the authors. The account choice is not part of this package.
2. Create a new empty repository and upload this package's files, including `.github/workflows/pages.yml`, to the `main` branch. Do not upload the original manuscript source or its Git history.
3. Under **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
4. Run **Deploy anonymous project page** under **Actions**, or push a change to `main`. The deployment output contains the website URL.

Alternatively, use **Deploy from a branch**, select `main` and `/ (root)`, and omit the supplied workflow. All website assets use relative paths, so both `username.github.io` and `username.github.io/repository/` work.

The supplied workflow stages only `index.html`, `styles.css`, `script.js`, `.nojekyll`, `robots.txt`, and `assets/` as public website content. The repository itself may still be public, depending on your GitHub plan and settings.

## Content and anonymous release

- Public author text: **Anonymous Authors**.
- The page uses the manuscript's full title and reports simulation results only.
- Figure images were rendered from the supplied manuscript figures and saved as WebP without source PDF metadata.
- The page includes no author names, affiliations, emails, tracking services, or links to personal repositories.
- The only external link is the design-reference credit to TD-MPC2; it uses `noreferrer`.
- `noindex`, `nofollow`, and `robots.txt` request that crawlers avoid the page. They do not provide access control or guarantee anonymity.
- Original `.tex`, `.bib`, PDF, PPTX, and unrelated figures are intentionally absent from this package.
- No compiled manuscript PDF or demonstration video was supplied; no placeholder paper or video links are shown.
- Code availability is displayed as plain status text, not a broken or inactive link.
- Conference acceptance, publication status, and official ICRA 2027 policy compliance are not asserted.

## Editing

- `index.html`: title, abstract, text, reported results, and figure descriptions.
- `styles.css`: responsive layout, typography, and red accent color.
- `script.js`: accessible figure enlargement dialog; Escape closes it.
- `assets/`: five research figures and a simple favicon.

When code or the paper becomes available, add a link only after checking the destination for author-identifying information. Replace the relevant Code status in the header and footer together.

## Figure mapping

| Website asset | Supplied figure |
| --- | --- |
| `framework.webp` | `humanoid-wm-framework.pdf` |
| `learning.webp` | `fig1_baselines_horizontal.pdf` |
| `adaptation.webp` | `fig2_finetune_reward_length.pdf` |
| `box-carrying.webp` | `MPPI-screeshots.pdf` |
| `prediction.webp` | `fig3_world_model_prediction.pdf` |

The layout is independently implemented, with visual inspiration from https://www.tdmpc2.com/. No source code or media from the reference website is included.
