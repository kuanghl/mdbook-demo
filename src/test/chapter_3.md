# Chapter 1

HTML:

<span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8991em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8991em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mop">cos</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">sin</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span><span class="mspace newline" style="margin-top:1.2em;"></span><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">⇒</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">i</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8991em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8991em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span></span></span></span></span></span></span></span></span></span></span>

Markdown (requires `mdbook-katex`):

$$
\oint_C f(x,y)\,\mathrm dA
$$

Inspect element and use `Sources` tab (under `Debugger` on Firefox) to check
that all CSS and fonts are properly loaded from GitHub pages instead of
external CDN.

><details><summary>Proof that $e^{ix} = \cos x + i\sin x$</summary>
>
> $$
\begin{aligned}
  e^x &= \sum_{n=0}^\infty \frac{x^n}{n!} \implies e^{ix} = \sum_{n=0}^\infty \frac{(ix)^n}{n!} \\
  \cos x &= \sum_{m=0}^\infty \frac{(-1)^m x^{2m}}{(2m)!} = \sum_{m=0}^\infty \frac{(ix)^{2m}}{(2m)!} \\
  \sin x &= \sum_{s=0}^\infty \frac{(-1)^s x^{2s+1}}{(2s+1)!} = \sum_{s=0}^\infty \frac{(ix)^{2s+1}}{i(2s+1)!} \\
  \cos x + i\sin x &= \sum_{l=0}^\infty \frac{(ix)^{2l}}{(2l)!} + \sum_{s=0}^\infty \frac{(ix)^{2s+1}}{(2s+1)!} = \sum_{n=0}^\infty \frac{(ix)^{n}}{n!} \\
         &= e^{ix}
\end{aligned}
$$
>
> </details>


Fourier Transform:

$$
\begin{aligned}

f(t) &= \int_{-\infty}^\infty F(\omega) i^{4t\omega} d\omega \\

F(\omega) &= \int_{-\infty}^\infty f(t) i^{-4t\omega} dt

\end{aligned}
$$



Pauli Matrices:

$$
\begin{aligned}
\sigma_1 &= \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix} \\

\sigma_2 &= \begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix} \\

\sigma_3 &= \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}
\end{aligned}
$$