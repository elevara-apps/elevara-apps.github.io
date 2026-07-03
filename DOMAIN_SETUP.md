# Elevara Custom Domain Setup

Domain: `elevara-apps.xyz`

GitHub Pages repository: `elevara-apps/elevara-apps.github.io`

## Namecheap DNS Records

In Namecheap, open **Domain List -> elevara-apps.xyz -> Manage -> Advanced DNS**.

Remove conflicting default parking or URL redirect records for `@` and `www`, then add:

| Type | Host | Value | TTL |
|---|---|---|---|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |
| AAAA Record | @ | 2606:50c0:8000::153 | Automatic |
| AAAA Record | @ | 2606:50c0:8001::153 | Automatic |
| AAAA Record | @ | 2606:50c0:8002::153 | Automatic |
| AAAA Record | @ | 2606:50c0:8003::153 | Automatic |
| CNAME Record | www | elevara-apps.github.io | Automatic |

Do not add wildcard records such as `*`.

## GitHub Pages Settings

The repository includes a root `CNAME` file containing:

```text
elevara-apps.xyz
```

After DNS propagates, enable **Enforce HTTPS** in:

`Settings -> Pages -> Custom domain`

GitHub says DNS propagation and HTTPS availability can take up to 24 hours.
