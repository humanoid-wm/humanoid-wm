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
- No compiled manuscript PDF was supplied; no placeholder paper link is shown. Twelve supplied training-progress videos appear in the Learning from scratch section.
- Code availability is displayed as plain status text, not a broken or inactive link.
- Conference acceptance, publication status, and official ICRA 2027 policy compliance are not asserted.

## Editing

- `index.html`: title, abstract, text, reported results, and figure descriptions.
- `styles.css`: responsive layout, typography, and red accent color.
- `script.js`: accessible figure enlargement dialog; Escape closes it.
- `assets/`: five research figures, a simple favicon, and twelve training videos with poster images.

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

## Training videos

`assets/videos/{motion}-{method}.mp4` covers walk, run, jump, and fight for hwm (Humanoid-WM), lift (LIFT), and mbpo (MBPO). HWM fight uses the supplied `fight1_hwm` clip. Web versions use H.264, CRF 26, original resolution and frame rate, and fast-start playback; metadata and audio are omitted. Original training-step overlays and timing are retained. Players load on demand, with per-motion playback controls. Compare the embedded environment-step labels rather than assuming timestamps correspond to equal training budgets.

## Interactive adaptation demos

`assets/demos/adaptation-{hwm,lift}-{0,22000}.html` contains the initial and 22,000-step trajectories. Step 0 displays one shared initial checkpoint for both methods, using the Humanoid-WM run’s initial rollout. The page groups 22,000 under the approximate 20,000-step comparison and discloses the actual checkpoint. Load buttons defer the 35 MB HTML downloads. Three.js 0.150.1, lil-gui 0.18.0, and Brax v0.9.1 viewer modules and licenses are bundled under `assets/vendor/`, so the viewers need no W&B account or external scripts. Trajectory data is retained unchanged.

## Box-carrying demos

Eight supplied interactive rollouts compare the deterministic policy with MPPI (population 30,000), for 1–4 kg boxes. The simulation data is unchanged; viewer dependencies are served locally.

| Website file | Supplied file |
| --- | --- |
| `box-policy-1kg.html` | `demo_det_off0p2_1p0kg.html` |
| `box-mppi-1kg.html` | `mppi_p1p4_pop30k_1kg_off0_2_seed0.html` |
| `box-policy-2kg.html` | `demo_det_off0p2_2p0kg.html` |
| `box-mppi-2kg.html` | `mppi_p1p4_pop30k_2kg_off0_2_seed0.html` |
| `box-policy-3kg.html` | `demo_det_off0p2_3p0kg.html` |
| `box-mppi-3kg.html` | `mppi_p1p4_pop30k_3kg_off0_2_seed8.html` |
| `box-policy-4kg.html` | `demo_det_off0p2_4p0kg.html` |
| `box-mppi-4kg.html` | `mppi_p1p4_pop30k_4kg_off0_2_seed148.html` |

Learning results pair the Run, Walk, and Jump curves with their respective three-method training videos. `learning-{run,walk,jump}.svg` are exact viewBox crops embedding the original WebP, with no regenerated curve data. Fight is displayed as a separate additional experiment row.
