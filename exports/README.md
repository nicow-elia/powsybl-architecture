# Exported diagrams

The PNGs here are exports of LikeC4 views of this project, one file per view: `proposals/<proposal>/<view id>.png`.
The `.c4` sources are authoritative; the images are committed for people who read the repository (or a review) without
running LikeC4. Regenerate them after changing a view – a stale PNG is worse than none.

To regenerate, from the repository root (same pinned image as `build_architecture_app.sh`):

```sh
docker run --rm -v "$PWD":/app -v "$PWD/exports/tmp":/out -w /app --entrypoint sh likec4/likec4:1.59.2 \
  -c "likec4 export png --flat -o /out -f <view id> [-f <view id> ...]; chown -R $(id -u):$(id -g) /out"
```

LikeC4 writes PNGs with a transparent background. Flatten each one onto white before committing it, so it reads
the same in dark-mode viewers, e.g. with Pillow:

```python
from PIL import Image
im = Image.open("exports/tmp/<view id>.png").convert("RGBA")
flat = Image.new("RGB", im.size, "white")
flat.paste(im, mask=im.split()[3])
flat.save("exports/proposals/<proposal>/<view id>.png", optimize=True)
```

Then delete `exports/tmp/`. Which views have an export is listed per proposal in [PROPOSALS.md](../PROPOSALS.md).
