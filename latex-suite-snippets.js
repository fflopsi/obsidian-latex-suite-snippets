[
// Math mode
{trigger: /mk/, replacement: "${ $0 }$$1", options: "tA"},
{trigger: /dm/, replacement: "$$\n$0\n$$\n", options: "tAw"},
{trigger: /adm/, replacement: "$$\n\\begin{align}\n$0\n\\end{align}\n$$\n", options: "tAw"},
{trigger: /split/, replacement: " }$ ${ ", options: "nA"},

// Headings
{trigger: /h([1-6])/, replacement: (match) => "#".repeat(match[1]) + " ", options: "tA"},

// English
{trigger: /(c)or/, replacement: "[[0]]orollary", options: "t", flags: "i"},
{trigger: /(s)ol/, replacement: "[[0]]olution", options: "t", flags: "i"},
{trigger: /(e)q/, replacement: "[[0]]quation", options: "t", flags: "i"},
{trigger: /(t)ri/, replacement: "[[0]]riangle inequality", options: "t", flags: "i"},
{trigger: /MVT/, replacement: "Mean Value Theorem", options: "t", flags: "i"},
{trigger: /(f)unc?/, replacement: "[[0]]unction", options: "t", flags: "i"},
{trigger: /(s)eq/, replacement: "[[0]]equence", options: "t", flags: "i"},
{trigger: /(s)seq/, replacement: "[[0]]ubsequence", options: "t", flags: "i"},
{trigger: /(p)t/, replacement: "[[0]]oint", options: "t", flags: "i"},
{trigger: /(p)ts/, replacement: "[[0]]oints", options: "t", flags: "i"},
{trigger: /(i)nfi/, replacement: "[[0]]nfinite", options: "t", flags: "i"},
{trigger: /(i)nfy/, replacement: "[[0]]nfinity", options: "t", flags: "i"},
{trigger: /(b)dd/, replacement: "[[0]]ounded", options: "t", flags: "i"},
{trigger: /(s)tr/, replacement: "[[0]]trictly", options: "t", flags: "i"},
{trigger: /(i)nc/, replacement: "[[0]]ncreasing", options: "t", flags: "i"},
{trigger: /(d)ec/, replacement: "[[0]]ecreasing", options: "t", flags: "i"},
{trigger: /(m)on/, replacement: "[[0]]onotone", options: "t", flags: "i"},
{trigger: /(m)oni/, replacement: "[[0]]onotonically", options: "t", flags: "i"},
{trigger: /(a)cc/, replacement: "[[0]]ccumulation", options: "t", flags: "i"},
{trigger: /(c)onv/, replacement: "[[0]]onverge", options: "t", flags: "i"},
{trigger: /(c)ont/, replacement: "[[0]]ontinuous", options: "t", flags: "i"},
{trigger: /(u)nif/, replacement: "[[0]]niformly", options: "t", flags: "i"},
{trigger: /(i)nv/, replacement: "[[0]]nvertible", options: "t", flags: "i"},
{trigger: /(d)iff/, replacement: "[[0]]ifferentiable", options: "t", flags: "i"},
{trigger: /(i)nt/, replacement: "[[0]]ntegrable", options: "t", flags: "i"},
{trigger: /(m)s/, replacement: "[[0]]etric space", options: "t", flags: "i"},
{trigger: /(v)s/, replacement: "[[0]]ector space", options: "t", flags: "i"},
{trigger: /(n)vs/, replacement: "[[0]]ormed vector space", options: "t", flags: "i"},
{trigger: /(i)ps/, replacement: "[[0]]nner product space", options: "t", flags: "i"},
{trigger: /(t)op/, replacement: "[[0]]opological", options: "t", flags: "i"},
{trigger: /(c)pt/, replacement: "[[0]]ompact", options: "t", flags: "i"},
{trigger: /(c)onn?/, replacement: "[[0]]onnected", options: "t", flags: "i"},
{trigger: /(m)ea/, replacement: "[[0]]easurable", options: "t", flags: "i"},
//{trigger: /(d)ya/, replacement: "[[0]]yadic", options: "t", flags: "i"},
//{trigger: /(s)ubm/, replacement: "[[0]]ubmanifold", options: "t", flags: "i"},
{trigger: /(c)om/, replacement: "[[0]]omplex", options: "t", flags: "i"},
{trigger: /(h)olo?/, replacement: "[[0]]olomorphic", options: "t", flags: "i"},

// Universal
{trigger: /(D)ef/, replacement: "[[0]]efinition", options: "t", flags: "i"},
{trigger: /(T)hm/, replacement: "[[0]]heorem", options: "t", flags: "i"},
{trigger: /(P)rop/, replacement: "[[0]]roposition", options: "t", flags: "i"},
{trigger: /(p)os/, replacement: "[[0]]ositiv", options: "t", flags: "i"},
{trigger: /(n)eg/, replacement: "[[0]]egativ", options: "t", flags: "i"},
{trigger: /(S)up/, replacement: "[[0]]upremum", options: "t", flags: "i"},
{trigger: /(I)nf/, replacement: "[[0]]nfimum", options: "t", flags: "i"},
{trigger: /(M)ax/, replacement: "[[0]]aximum", options: "t", flags: "i"},
{trigger: /(M)in/, replacement: "[[0]]inimum", options: "t", flags: "i"},
{trigger: /(D)ia/, replacement: "[[0]]iagonal", options: "t", flags: "i"},
{trigger: /(D)im/, replacement: "[[0]]imension", options: "t", flags: "i"},
{trigger: /(T)ran?s?/, replacement: "[[0]]ransformation", options: "t", flags: "i"},
{trigger: /Cau?/, replacement: "Cauchy", options: "t", flags: "i"},
{trigger: /Lip/, replacement: "Lipschitz", options: "t", priority: 1, flags: "i"},
{trigger: /Tay/, replacement: "Taylor", options: "t", priority: 1, flags: "i"},
{trigger: /Rie?/, replacement: "Riemann", options: "t", flags: "i"},
{trigger: /Jor/, replacement: "Jordan", options: "t", flags: "i"},
{trigger: /Leb/, replacement: "Lebesgue", options: "t", flags: "i"},
{trigger: /CR/, replacement: "Cauchy-Riemann", options: "t", flags: "i"},
{trigger: /Fou?/, replacement: "Fourier", options: "t", flags: "i"},
{trigger: /Schw?/, replacement: "Schwartz", options: "t", flags: "i"},

// German
{trigger: /Kor/, replacement: "Korollar", options: "t", flags: "i"},
{trigger: /Bsp/, replacement: "Beispiel", options: "t", flags: "i"},
{trigger: /Bem/, replacement: "Bemerkung", options: "t", flags: "i"},
{trigger: /Bew/, replacement: "Beweis", options: "t", flags: "i"},
{trigger: /(b)spw/, replacement: "[[0]]eispielsweise", options: "t", flags: "i"},
{trigger: /(z)B/, replacement: "[[0]]um Beispiel", options: "t", flags: "i"},
{trigger: /(b)zw/, replacement: "[[0]]eziehungsweise", options: "t"},
{trigger: /(v)gl/, replacement: "[[0]]ergleiche", options: "t", flags: "i"},
{trigger: /(K)oef/, replacement: "[[0]]oeffizienten", options: "t", flags: "i"},
{trigger: /IS/, replacement: "Inertialsystem", options: "t", flags: "i"},
{trigger: /VR/, replacement: "Vektorraum", options: "t", flags: "i"},
{trigger: /UR/, replacement: "Unterraum", options: "t", flags: "i"},
//{trigger: /ES/, replacement: "Erzeugendensystem", options: "t", flags: "i"},
{trigger: /(l)inu/, replacement: "[[0]]inear unabhängig", options: "t", flags: "i"},
{trigger: /(l)ina/, replacement: "[[0]]inear abhängig", options: "t", flags: "i"},
//{trigger: /(e)d/, replacement: "[[0]]ndlich-dimensional", options: "t", flags: "i"},
//{trigger: /(u)d/, replacement: "[[0]]nendlich-dimensional", options: "t", flags: "i"},
{trigger: /LK/, replacement: "Linearkombination", options: "t", flags: "i"},
{trigger: /(L)GS/, replacement: "[[0]]ineares Gleichungssystem", options: "t", flags: "i"},
{trigger: /GLS/, replacement: "Gleichungssystem", options: "t", flags: "i"},
{trigger: /DGL/, replacement: "Differentialgleichung", options: "t", flags: "i"},
{trigger: /Abb/, replacement: "Abbildung", options: "t", flags: "i"},
{trigger: /(l)in/, replacement: "[[0]]inear", options: "t", flags: "i"},
{trigger: /(l)iab/, replacement: "[[0]]ineare Abbildung", options: "t", flags: "i"},
//{trigger: /(s)a/, replacement: "[[0]]elbst-adjungiert", options: "t", flags: "i"},
//{trigger: /(i)nj/, replacement: "[[0]]njektiv", options: "t", flags: "i"},
//{trigger: /(s)urj/, replacement: "[[0]]urjektiv", options: "t", flags: "i"},
//{trigger: /(b)ij/, replacement: "[[0]]ijektiv", options: "t", flags: "i"},
{trigger: /Pol/, replacement: "Polynom", options: "t", flags: "i"},
{trigger: /NST/, replacement: "Nullstelle", options: "t", flags: "i"},
{trigger: /EW/, replacement: "Eigenwert", options: "t", flags: "i"},
{trigger: /EV/, replacement: "Eigenvektor", options: "t", flags: "i"},
//{trigger: /ER/, replacement: "Eigenraum", options: "t", flags: "i"},
//{trigger: /(d)b/, replacement: "[[0]]iagonalisierbar", options: "t", flags: "i"},
//{trigger: /JNF/, replacement: "Jordan'sche Normalform", options: "t", flags: "i"},
//{trigger: /(I)PR/, replacement: "[[0]]nnerer Produktraum", options: "t", flags: "i"},
//{trigger: /Pr/, replacement: "Produkt", options: "t", flags: "i"},
//{trigger: /(I)P/, replacement: "[[0]]nneres Produkt", options: "t", flags: "i"},
{trigger: /(o)rth?g/, replacement: "[[0]]rthogonal", options: "t", flags: "i"},
{trigger: /(o)rt(h?)n/, replacement: "[[0]]rthonormal", options: "t", flags: "i"},
//{trigger: /(O)NB/, replacement: "[[0]]rthonormale Basis", options: "t", flags: "i"},

// Order numbers
{trigger: /1st/, replacement: "1<sup>st</sup>", options: "tA"},
{trigger: /2nd/, replacement: "2<sup>nd</sup>", options: "tA"},
{trigger: /3rd/, replacement: "3<sup>rd</sup>", options: "tA"},
{trigger: /([04-9])th/, replacement: "[[0]]<sup>th</sup>", options: "tA"},
//{trigger: /1st/, replacement: "1^{\\text{st}}", options: "mA"},
//{trigger: /2nd/, replacement: "2^{\\text{nd}}", options: "mA"},
//{trigger: /3rd/, replacement: "3^{\\text{rd}}", options: "mA"},
//{trigger: /([04-9])th/, replacement: "[[0]]^{\\text{th}}", options: "mA"},

// Visual, don't work with regex
{trigger: "A", replacement: "\\begin{align}\n${VISUAL}$0\n\\end{align}", options: "mA"},
{trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }$1", options: "mA"},
{trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }$1", options: "mA"},
//{trigger: "N", replacement: "\\underset{ $0 }{ ${VISUAL} }$1", options: "mA"},
{trigger: "H", replacement: "\\overset{ $0 }{ ${VISUAL} }$1", options: "mA"},
{trigger: "L", replacement: "\\underline{${VISUAL}}", options: "mA"},
{trigger: "B", replacement: "\\boxed{${VISUAL}}", options: "mA"},
{trigger: "C", replacement: "\\cancel{${VISUAL}}", options: "mA"},
{trigger: "X", replacement: "\\xcancel{${VISUAL}}", options: "mA"},
{trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }$1", options: "mA"},
{trigger: "S", replacement: "\\sqrt{${VISUAL}}", options: "mA"},
{trigger: "M", replacement: "\\left| ${VISUAL} \\right|", options: "mA"},
//{trigger: "n", replacement: "\\| ${VISUAL} \\|", options: "mA"},
{trigger: "N", replacement: "\\left\\| ${VISUAL} \\right\\|", options: "mA"},
{trigger: "\|", replacement: "| ${VISUAL} |", options: "mA"},
{trigger: "\(", replacement: "(${VISUAL})", options: "mA"},
{trigger: "\[", replacement: "[${VISUAL}]", options: "mA"},
{trigger: "\{", replacement: "{${VISUAL}}", options: "mA"},

// Greek letters
{trigger: /@a/, replacement: "\\alpha", options: "mA"},
{trigger: /@b/, replacement: "\\beta", options: "mA"},
{trigger: /@(g)/, replacement: "\\[[0]]amma", options: "mA", flags: "i"},
{trigger: /@(d)/, replacement: "\\[[0]]elta", options: "mA", flags: "i"},
{trigger: /@e/, replacement: "\\epsilon", options: "mA"},
{trigger: /:e/, replacement: "\\varepsilon", options: "mA"},
{trigger: /@z/, replacement: "\\zeta", options: "mA"},
{trigger: /@h/, replacement: "\\eta", options: "mA"},
{trigger: /@(t)/, replacement: "\\[[0]]heta", options: "mA", flags: "i"},
{trigger: /:t/, replacement: "\\vartheta", options: "mA"},
{trigger: /@i/, replacement: "\\iota", options: "mA"},
{trigger: /@k/, replacement: "\\kappa", options: "mA"},
{trigger: /@(l)/, replacement: "\\[[0]]ambda", options: "mA", flags: "i"},
{trigger: /@m/, replacement: "\\mu", options: "mA"},
{trigger: /@n/, replacement: "\\nu", options: "mA"},
{trigger: /@(x)/, replacement: "\\[[0]]i", options: "mA", flags: "i"},
{trigger: /@r/, replacement: "\\rho", options: "mA"},
{trigger: /:r/, replacement: "\\varrho", options: "mA"},
{trigger: /@(s)/, replacement: "\\[[0]]igma", options: "mA", flags: "i"},
{trigger: /@(u)/, replacement: "\\[[0]]psilon", options: "mA", flags: "i"},
{trigger: /@(p)/, replacement: "\\[[0]]hi", options: "mA", flags: "i"},
{trigger: /:p/, replacement: "\\varphi", options: "mA"},
{trigger: /@c/, replacement: "\\chi", options: "mA"},
{trigger: /@(o)/, replacement: "\\[[0]]mega", options: "mA", flags: "i"},
{trigger: /(o)me/, replacement: "\\[[0]]mega", options: "mA", flags: "i"},
// Add backslash before greek letters and symbols
{trigger: /([^\\])(${GREEK}|${SYMBOL})/, replacement: "[[0]]\\[[1]]", options: "mA"},
// Insert space after greek letters and symbols, etc
{trigger: /\\(${GREEK}|${SYMBOL}|${SHORT_SYMBOL})([A-Za-z])/, replacement: "\\[[0]] [[1]]", options: "mA"},
{trigger: /\\(${GREEK}|${SYMBOL}) sr/, replacement: "\\[[0]]^{2}", options: "mA"},
{trigger: /\\(${GREEK}|${SYMBOL}) cb/, replacement: "\\[[0]]^{3}", options: "mA"},
{trigger: /\\(${GREEK}|${SYMBOL}) (bar|dot|ddot|hat|tilde|vec)/, replacement: "\\[[1]]{\\[[0]]}", options: "mA"},
{trigger: /\\(${GREEK}|${SYMBOL}) ck/, replacement: "\\check{\\[[0]]}", options: "mA"},
{trigger: /\\(${GREEK}|${SYMBOL}) (dd?)vec/, replacement: "\\[[1]]ot{\\vec{\\[[0]]}}", options: "mA", priority: 2},
{trigger: /\\(${GREEK}|${SYMBOL}) und/, replacement: "\\underline{\\[[0]]}", options: "mA"},
{trigger: /\\(${GREEK}|${SYMBOL}) lbar/, replacement: "\\overline{\\[[0]]}", options: "mA", priority: 1},
//{trigger: /\\(${GREEK}),\\./, replacement: "\\boldsymbol{\\[[0]]}", options: "mA"},
//{trigger: /\\(${GREEK})\\.,/, replacement: "\\boldsymbol{\\[[0]]}", options: "mA"},
//{trigger: /\\(${GREEK})\./, replacement: "_{\\[[0]]}", options: "mA", priority: 1},

// Trigonometric functions
// Add \ before trig functions
{trigger: /([^\\])(${TRIG})/, replacement: "[[0]]\\[[1]]", options: "mA"},
// Insert space after trig functions. Skips letter "h" to allow sinh, cosh, etc
{trigger: /\\(${TRIG})([A-Za-gi-z0-9])/, replacement: "\\[[0]] [[1]]", options: "mA"},
// Insert space after hyperbolic trig functions
{trigger: /\\(${HYP_TRIG})([A-Za-z0-9])/, replacement: "\\[[0]] [[1]]", options: "mA"},
// Define missing trig functions
{trigger: /\\?(${TRIG_NEW}|${HYP_TRIG_NEW})/, replacement: "\\mathop{\\mathrm{[[0]]}}", options: "mA"},
// Define missing area hyperbolic trig functions
{trigger: /ar\\(${HYP_TRIG}|${HYP_TRIG_NEW})/, replacement: "\\mathop{\\mathrm{ar[[0]]}}", options: "mA", priority: 1},

// Operations
{trigger: /(?<!\\ar)([FGfg](_\{[0-9ijkmn]\})?)('*)([w-z])/, replacement: "[[0]][[2]]([[3]])", options: "mA"},
{trigger: /([FGfg](_\{[0-9ijkmn]\})?)('*)\(([xyz])\)([0-9])/, replacement: "[[0]][[2]]([[3]]_{[[4]]})", options: "mA"},
{trigger: /fuv/, replacement: "f = u + iv", options: "mA"},
{trigger: /\\gamma([abt])/, replacement: "\\gamma([[0]])", options: "mA", priority: 1},
{trigger: /\\gamma\(([abt])\)([0-9])/, replacement: "\\gamma([[0]]_{[[1]]})", options: "mA", priority: 1},
//{trigger: /hom/, replacement: "\\mathrm{Hom}_{${0:K}}(${1:V}, ${2:W})", options: "mA"},
{trigger: /11([ijkmn])/, replacement: "\\mathbb{1}_{[[0]]}", options: "mA"},
{trigger: /\\mathbb\{1\}_\{([ijkmn])\}([2-9])/, replacement: "\\mathbb{1}_{[[1]]}", options: "mA"},
{trigger: /(C|L)([0-9ijkmn])/, replacement: "[[0]]^{[[1]]}", options: "mA", priority: 1},
{trigger: /(C|L)o/, replacement: "[[0]]^{\\infty}", options: "mA"},
{trigger: /csv/, replacement: "${1:v}_{1}, \\dots, ${1:v}_{${2:n}}$3", options: "mA"},
{trigger: /mx/, replacement: "M_{${0:m} \\times ${1:n}}(${3:K})", options: "mA"},
{trigger: /lim/, replacement: "\\lim_{${0:n} \\to ${1:\\infty}} $2", options: "mA", priority: 1},
{trigger: /lis/, replacement: "\\limsup_{${0:n} \\to ${1:\\infty}} $2", options: "mA"},
{trigger: /lin/, replacement: "\\liminf_{${0:n} \\to ${1:\\infty}} $2", options: "mA"},
{trigger: /te/, replacement: "\\text{$0}", options: "m"},
{trigger: /text/, replacement: "\\text{$0}", options: "mA"},
{trigger: /sts/, replacement: "_\\text{$0}", options: "mA"},
{trigger: /m?(bb|bf|cal|rm|scr|op)/, replacement: "\\math[[0]]{$0}$1", options: "mA"},
{trigger: /sq/, replacement: "\\sqrt{$0}$1", options: "mA"},
{trigger: /nsq/, replacement: "\\sqrt[$0]{$1}$2", options: "mA", priority: 1},
{trigger: /sr/, replacement: "^{2}", options: "mA"},
{trigger: /cb/, replacement: "^{3}", options: "mA"},
{trigger: /(\^|_)/, replacement: "[[0]]{$0}$1", options: "mA"},
{trigger: /invs/, replacement: "^{-1}", options: "mA"},
{trigger: /tpd/, replacement: "^{\\top}", options: "mA"},
{trigger: /conj/, replacement: "^{*}", options: "mA"},
{trigger: /dual/, replacement: "^{*}", options: "mA"},
{trigger: /\*\}d/, replacement: "**}", options: "mA"},
{trigger: /ani/, replacement: "^{\\perp}", options: "mA"},
{trigger: /\/\//, replacement: "\\frac{$0}{$1}$2", options: "mA"},
{trigger: /ee/, replacement: "e^{$0}$1", options: "mA"},
//{trigger: /(max|min|sup|inf|sum|prod|det|ker|cong|ell|arg)/, replacement: "\\[[0]]", options: "mA"},
//{trigger: /cdot/, replacement: "\\cdot", options: "mA", priority: 2},
{trigger: /(id)/, replacement: "\\mathrm{[[0]]}", options: "mA"},
{trigger: /(Re|Im|sgn|Tr|End|adj|im|rk|grad|div|rot|vol|spt|Sym|Alt|Arg|ord)/, replacement: "\\mathop{\\mathrm{[[0]]}}", options: "mA"},
//{trigger: /trace/, replacement: "\\mathop{\\mathrm{Tr}}", options: "mA"},
// Auto letter subscript
{trigger: /([A-Za-z])(\d)/, replacement: "[[0]]_{[[1]]}", options: "mA", priority: -1},
{trigger: /([A-Za-z])_\{(\d+)\}(\d)/, replacement: "[[0]]_{[[1]][[2]]}", options: "mA"},
{trigger: /\\(bar|check|dot|ddot|hat|tilde|vec){([A-Za-z])}(\d)/, replacement: "\\[[0]]{[[1]]}_{[[2]]}", options: "mA"},
{trigger: /([a-zA-Z])(bar|dot|ddot|hat|tilde|vec)/, replacement: "\\[[1]]{[[0]]}", options: "mA"},
{trigger: /([a-zA-Z])ck/, replacement: "\\check{[[0]]}", options: "mA"},
{trigger: /([a-zA-Z])ring/, replacement: "\\mathring{[[0]]}", options: "mA"},
{trigger: /([a-zA-Z])lbar/, replacement: "\\overline{[[0]]}", options: "mA", priority: 1},
{trigger: /([a-zA-Z])und/, replacement: "\\underline{[[0]]}", options: "mA"},
{trigger: /([a-zA-Z])(dd?)vec/, replacement: "\\[[1]]ot{\\vec{[[0]]}}", options: "mA", priority: 2},
{trigger: /([a-zA-Z])compl/, replacement: "[[0]]^{\\complement}", options: "mA"},
{trigger: /([a-zA-Z])top/, replacement: "[[0]]^{\\top}", options: "mA"},
{trigger: /(bar|check|dot|ddot|hat|tilde|vec)/, replacement: "\\[[0]]{$0}$1", options: "mA"},
{trigger: /(dd?)vec/, replacement: "\\[[0]]ot{\\vec{$0}}", options: "mA", priority: 2},
{trigger: /lbar/, replacement: "\\overline{$0}", options: "mA", priority: 1},
{trigger: /und/, replacement: "\\underline{$0}", options: "mA"},
// Insert space after inequality symbols
{trigger: /\\(neq|geq|leq|gg|ll|sim|simeq|approx|cong|equiv)([0-9]+)/, replacement: "\\[[0]] [[1]]", options: "mA"}, //improve

// Symbols
// Fix ' usage for derivatives to supress autopair
{trigger: /'/, replacement: "'$0", options: "mA"},
{trigger: /ooo/, replacement: "\\infty", options: "mA"},
{trigger: /cpd/, replacement: "\\circ", options: "mA"},
{trigger: /\+-/, replacement: "\\pm", options: "mA"},
{trigger: /-\+/, replacement: "\\mp", options: "mA"},
//{trigger: /([^\\])(pm|mp)/, replacement: "[[0]]\\[[1]]", options: "m"},
{trigger: /o\+/, replacement: "\\oplus", options: "mA"},
{trigger: /o-/, replacement: "\\ominus", options: "mA"},
{trigger: /ox/, replacement: "\\otimes", options: "mA"},
{trigger: /o\//, replacement: "\\oslash", options: "mA", priority: 1},
{trigger: /\.\./, replacement: "\\cdot", options: "mA"},
{trigger: /\\cdot\./, replacement: "\\dots", options: "mA"},
{trigger: /(c|d)\\cdot\./, replacement: "\\[[0]]dots", options: "mA"},
{trigger: /::/, replacement: "\\vdots", options: "mA"},
{trigger: /->|to/, replacement: "\\to", options: "mA", priority: -1},
{trigger: /-->/, replacement: "\\xrightarrow{${0:n} \\to ${1:\\infty}} $2", options: "mA"},
{trigger: /dto/, replacement: "\\searrow", options: "mA"},
{trigger: /uto/, replacement: "\\nearrow", options: "mA"},
{trigger: /mto/, replacement: "\\mapsto", options: "mA"},
//{trigger: /!>/, replacement: "\\mapsto", options: "mA"},
{trigger: /lto/, replacement: "\\leadsto", options: "mA"},
{trigger: /<->/, replacement: "\\leftrightarrow", options: "mA"},
{trigger: /pri/, replacement: "\\prime", options: "mA"},
{trigger: /eql/, replacement: "(*)", options: "mA"},
{trigger: /\*\)l/, replacement: "**)", options: "mA"},
{trigger: /ort/, replacement: "\\perp", options: "mA"},
{trigger: /\\\\\\/, replacement: "\\setminus", options: "mA"},
{trigger: /\|\|/, replacement: "\\mid", options: "mA"},
{trigger: /m\|\|/, replacement: "\\;\\middle|\\;", options: "mA", priority: 1},
{trigger: /b\|\|/, replacement: "\\Biggm|", options: "mA", priority: 1},
{trigger: /and/, replacement: "\\land", options: "mA"},
{trigger: /orr/, replacement: "\\lor", options: "mA"},
{trigger: /bc(u|a)p/, replacement: "\\bigc[[0]]p", options: "mA", priority: 1},
{trigger: /inn/, replacement: "\\in", options: "mA"},
{trigger: /nii/, replacement: "\\ni", options: "mA"},
{trigger: /notin/, replacement: "\\notin", options: "mA", priority: 1},
{trigger: /cnot/, replacement: "\\centernot", options: "mA"},
{trigger: /nott/, replacement: "\\not", options: "mA"},
{trigger: /sset/, replacement: "\\subseteq", options: "mA", priority: 1},
{trigger: /spset/, replacement: "\\supseteq", options: "mA", priority: 1},
{trigger: /eset/, replacement: "\\emptyset", options: "mA", priority: 1},
{trigger: /(n?)e\\xi sts/, replacement: "\\[[0]]exists", options: "mA", priority: 1},
{trigger: /foral/, replacement: "\\forall", options: "mA"},
{trigger: /=>/, replacement: "\\implies", options: "mA"},
{trigger: /=</, replacement: "\\impliedby", options: "mA"},
{trigger: /iff/, replacement: "\\iff", options: "mA"},
{trigger: /===/, replacement: "\\equiv", options: "mA"},
{trigger: /S(Q|q)/, replacement: "\\square", options: "mA"},
//{trigger: /!=/, replacement: "\\neq", options: "mA"},
//{trigger: />=/, replacement: "\\geq", options: "mA"},
//{trigger: /<=/, replacement: "\\leq", options: "mA"},
//{trigger: />>/, replacement: "\\gg", options: "mA"},
//{trigger: /<</, replacement: "\\ll", options: "mA"},
//{trigger: /~~/, replacement: "\\sim", options: "mA"},
//{trigger: /\\sim~/, replacement: "\\approx", options: "mA"},
{trigger: /prop/, replacement: "\\propto", options: "mA"},
{trigger: /nabl/, replacement: "\\nabla", options: "mA"},
{trigger: /del/, replacement: "\\partial", options: "mA"},
{trigger: /ddd/, replacement: "\\mathrm{d}", options: "mA"},
{trigger: /xx/, replacement: "\\times", options: "mA"},
{trigger: /   /, replacement: " \\, ", options: "mA"},
{trigger: /para/, replacement: "\\parallel", options: "mA"},
{trigger: /(c|k)onst/, replacement: "\\text{[[0]]onst.}", options: "mA"},

{trigger: /([abcfgu-z])([ijkmn])\2/, replacement: "[[0]]_{[[1]]}", options: "mA"},
{trigger: /\\xii/, replacement: "x_{i}", options: "mA", priority: 2},
{trigger: /([abcfgu-z])ll/, replacement: "[[0]]_{\\ell}", options: "mA", priority: 2},
{trigger: /([abcfgu-z])nk/, replacement: "[[0]]_{n_{k}}", options: "mA"},
{trigger: /([abcfgu-z])([ijkmn])p1/, replacement: "[[0]]_{[[1]]+1}", options: "mA"},
{trigger: /([abcfgu-z])([ijkmn])m1/, replacement: "[[0]]_{[[1]]-1}", options: "mA"},
{trigger: /([abcfgu-z])lp1/, replacement: "[[0]]_{\\ell+1}", options: "mA"},
{trigger: /([abcfgu-z])lm1/, replacement: "[[0]]_{\\ell-1}", options: "mA"},
{trigger: /([abcfgu-z])p1/, replacement: "[[0]]_{n+1}", options: "mA"},
{trigger: /([abcfgu-z])m1/, replacement: "[[0]]_{n-1}", options: "mA"},
{trigger: /-1([ijkmn])/, replacement: "(-1)^{[[0]]}", options: "mA"},

//{trigger: /inc/, replacement: "\\imath", options: "mA"},
{trigger: /([NZQRC])\1/, replacement: "\\mathbb{[[0]]}", options: "mA"},
{trigger: /\\mathbb\{([NZQRC])\}([2-9a-z+-])/, replacement: "\\mathbb{[[0]]}^{[[1]]}", options: "mA"},
{trigger: /\\mathbb\{N\}0/, replacement: "\\mathbb{N}_{0}", options: "mA"},
{trigger: /([F])\1/, replacement: "\\mathcal{[[0]]}", options: "mA"},
{trigger: /([HS])\1/, replacement: "\\mathscr{[[0]]}", options: "mA"},

// Derivatives
{trigger: /der/, replacement: "\\frac{\\mathrm{d}${0:y}}{\\mathrm{d}${1:x}}$2", options: "m"},
{trigger: /de([2-9])/, replacement: "\\frac{\\mathrm{d}^{[[0]]} ${0:y}}{\\mathrm{d}${1:x}^{[[0]]}}$2", options: "mA"},
{trigger: /de([A-Za-z])/, replacement: "\\frac{\\mathrm{d}}{\\mathrm{d}[[0]]}", options: "m"},
{trigger: /de([A-Za-z])([2-9])/, replacement: "\\frac{\\mathrm{d}^{[[1]]}}{\\mathrm{d}[[0]]^{[[1]]}}", options: "mA"},
{trigger: /de([A-Za-z])([A-Za-z])/, replacement: "\\frac{\\mathrm{d}[[0]]}{\\mathrm{d}[[1]]}", options: "m"},
{trigger: /de([A-Za-z])([A-Za-z])([2-9])/, replacement: "\\frac{\\mathrm{d}^{[[2]]}[[0]]}{\\mathrm{d}[[1]]^{[[2]]}}", options: "mA"},
{trigger: /[^\\]de([A-Za-z])([A-Za-z])([A-Za-z])/, replacement: "\\frac{\\mathrm{d}^{2} [[0]]}{\\mathrm{d}[[1]] \\, \\mathrm{d}[[2]]}", options: "m"},
{trigger: /dd([tx])/, replacement: "\\frac{\\mathrm{d}$0}{\\mathrm{d}[[0]]}$1", options: "mA"},
{trigger: /par/, replacement: "\\frac{\\partial ${0:y}}{\\partial ${1:x}}$2", options: "m"},
{trigger: /pa([2-9])/, replacement: "\\frac{\\partial^{[[0]]} ${0:y}}{\\partial ${1:x}^{[[0]]}}$2", options: "mA"},
{trigger: /pa([A-Za-z])/, replacement: "\\frac{\\partial}{\\partial [[0]]}", options: "m"},
{trigger: /pa([A-Za-z])([2-9])/, replacement: "\\frac{\\partial^{[[1]]}}{\\partial [[0]]^{[[1]]}}", options: "mA"},
{trigger: /pa([A-Za-z])([A-Za-z])/, replacement: "\\frac{\\partial [[0]]}{\\partial [[1]]}", options: "m"},
{trigger: /pa([A-Za-z])([A-Za-z])([2-9])/, replacement: "\\frac{\\partial^{[[2]]} [[0]]}{\\partial [[1]]^{[[2]]}}", options: "mA"},
{trigger: /pa([A-Za-z])([A-Za-z])([A-Za-z])/, replacement: "\\frac{\\partial^{2} [[0]]}{\\partial [[1]] \\, \\partial [[2]]}", options: "m"},
//{trigger: /der/, replacement: "\\lim_{${0:h} \\to ${1:0}} \\frac{$2}{${0:h}}", options: "mA"},

// Integrals
{trigger: /int/, replacement: "\\int $0 \\, \\mathrm{d}${1:x}", options: "mA"},
{trigger: /dint/, replacement: "\\int_{${0:0}}^{${1:\\infty}} $2 \\, \\mathrm{d}${3:x}", options: "mA"},
{trigger: /init/, replacement: "\\int_{-\\infty}^{\\infty} $0 \\, \\mathrm{d}${1:x}", options: "mA"},
{trigger: /gint/, replacement: "\\int_{${0:\\gamma}} $1 \\, \\mathrm{d}${2:x}", options: "mA"},
{trigger: /oint/, replacement: "\\oint", options: "mA"},
{trigger: /(i{2,4})nt/, replacement: "\\[[0]]nt", options: "mA"},
{trigger: /isnt/, replacement: "\\int", options: "mA", priority: 1},

// Physics
{trigger: /kbb/, replacement: "k_{B}", options: "mA"},
{trigger: /kbt/, replacement: "k_{B}T", options: "mA"},
{trigger: /pu/, replacement: "\\pu{$0}$1", options: "mA"},
{trigger: /(Q|W)in/, replacement: "[[0]]^{\\swarrow}", options: "mA"},
{trigger: /(Q|W)out/, replacement: "[[0]]^{\\nearrow}", options: "mA"},
{trigger: /msun|solm/, replacement: "M_{\\odot}", options: "mA"},

// Quantum mechanics
{trigger: /hba/, replacement: "\\hbar", options: "mA"},
{trigger: /dag/, replacement: "^{\\dagger}", options: "mA"},
{trigger: /bra/, replacement: "\\bra{$0}$1", options: "mA"},
{trigger: /ket/, replacement: "\\ket{$0}$1", options: "mA"},
{trigger: /brk/, replacement: "\\braket{ $0 | $1 }$2", options: "mA"},
// Bra to braket
{trigger: /\\bra\{([^|]+)\|/, replacement: "\\braket{ [[0]] | $0 ", options: "mA"},
{trigger: /\\bra\{(.+)\}([^ ]+)>/, replacement: "\\braket{ [[0]] | [[1]] }$0", options: "mA"},
{trigger: /outp/, replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "mA"},

// Environments
{trigger: /beg/, replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "MA"},
{trigger: /case/, replacement: "\\begin{cases}\n$0\n\\end{cases}", options: "MA"},
{trigger: /([pbBvV])mat/, replacement: "\\begin{[[0]]matrix}\n$0\n\\end{[[0]]matrix}", options: "MA"},
{trigger: /(align|array|matrix)/, replacement: "\\begin{[[0]]}\n$0\n\\end{[[0]]}", options: "MA"},

// Brackets
{trigger: /coi/, replacement: "[$0)$1", options: "mA"},
{trigger: /oci/, replacement: "($0]$1", options: "mA"},
{trigger: /set/, replacement: "\\{ $0 \\}$1", options: "mA"},
{trigger: /avg/, replacement: "\\langle $0 \\rangle $1", options: "mA"},
{trigger: /mod/, replacement: "| $0 |$1", options: "mA"},
{trigger: /mood/, replacement: "\\left| $0 \\right|$1", options: "mA"},
{trigger: /norm/, replacement: "\\| $0 \\|$1", options: "mA", priority: 2},
{trigger: /noorm/, replacement: "\\left\\| $0 \\right\\|$1", options: "mA", priority: 2},
{trigger: /\(/, replacement: "($0)$1", options: "mA"},
{trigger: /\{/, replacement: "{$0}$1", options: "mA"},
{trigger: /\[/, replacement: "[$0]$1", options: "mA"},
{trigger: /lr\(/, replacement: "\\left( $0 \\right)$1", options: "mA"},
{trigger: /lr\{/, replacement: "\\left\\{ $0 \\right\\}$1", options: "mA"},
{trigger: /lr\[/, replacement: "\\left[ $0 \\right]$1", options: "mA"},
{trigger: /lra/, replacement: "\\left< $0 \\right> $1", options: "mA"},
{trigger: /lrf/, replacement: "\\lfloor $0 \\rfloor$1", options: "mA"},
{trigger: /lrc/, replacement: "\\lceil $0 \\rceil$1", options: "mA"},
// These have some issues, especially matching too much despite the *? lazy matching operator  (but this only works in the forward direction, while I need it to work backwards, matching as few as possible from the end of the pattern towards the beginning
//{trigger: /(\\left)?\(\s*([^,]*?)\s*,\s*([^,]*?)\s*(\\right)?\)22/, replacement: "\\begin{pmatrix}\n[[1]] \\\\\n[[2]]\n\\end{pmatrix}", options: "MA"},
//{trigger: /(\\left)?\(\s*([^,]*?)\s*,\s*([^,]*?)\s*,\s*([^,]*?)\s*(\\right)?\)33/, replacement: "\\begin{pmatrix}\n[[1]] \\\\\n[[2]] \\\\\n[[3]]\n\\end{pmatrix}", options: "MA"},
//{trigger: /([A-Za-z])\./, replacement: "_{[[0]]}", options: "mA"},

// Misc
//{trigger: /tayl/, replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA"},
]
