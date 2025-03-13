// Get the correct order suffix
const th = s => s == "1" ? "st" : s == "2" ? "nd" : s == "3" ? "rd" : "th";
// Transform l to \ell if needed
const l = s => s == "l" ? "\\ell" : s;
// Transform o to \infty if needed
const o = s => s == "o" ? "\\infty" : s;
// Remove an added space (behind a greek letter)
const tr = s => s.endsWith(" ") ? s.slice(0,-1) : s;
// Retrieve full decorator from abbreviation
function d(s) {
  const deco = {
    cek: "check", dvc: "dot vec", ddvc: "ddot vec", lbr: "overline", ring: "mathring", und: "underline", wht: "widehat", wtd: "widetilde"
  };
  return Object.keys(deco).contains(s) ? deco[s] : s;
}
// Retrieve corresponding greek letter, uppercase if necessary
function gr(s) {
  const greek = {
    a: "alpha", b: "beta", g: "gamma", d: "delta", e: "epsilon",
    z: "zeta", h: "eta", t: "theta", i: "iota",
    k: "kappa", l: "lambda", m: "mu", n: "nu",
    x: "xi", r: "rho", s: "sigma", u: "upsilon",
    p: "phi", f: "phi", c: "chi", y: "psi", o: "omega", w: "omega",
  };
  return s === s.toUpperCase() ? greek[s.toLowerCase()].charAt(0).toUpperCase() + greek[s.toLowerCase()].slice(1) : greek[s];
}

// Exported snippets
export default [
// Math mode
{trigger: /fj|jf/, replacement: "${ $0 }$$1", options: "tA"},
{trigger: /(a?)dk|kd/, replacement: m => `$$\n${m[1] == "a" ? "\\begin{align}\n" : ""}$0\n${m[1] == "a" ? "\\end{align}\n" : ""}$$\n`, options: "tAw"},
{trigger: /split/, replacement: " }$ $0${ ", options: "nA"},
// Environments
{trigger: /beg/, replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "MA"},
{trigger: /case/, replacement: "\\begin{cases}\n$0\n\\end{cases}", options: "MA"},
{trigger: /(align|array|matrix)/, replacement: "\\begin{[[0]]}\n$0\n\\end{[[0]]}", options: "MA"},
{trigger: /([BbpVv])mat/, replacement: "\\begin{[[0]]matrix}\n$0\n\\end{[[0]]matrix}", options: "MA"},
// Matrix multi-tab contraction
{trigger: /((?: & ){2,}) /, replacement: m => ` ${"&".repeat(m[1].match(/&/g).length)} `, options: "mA"},

// Headings
{trigger: /h([1-6])/, replacement: m => `${"#".repeat(m[1])} `, options: "tA"},

// English
{trigger: /(c)or/, replacement: "[[0]]orollary", options: "t", flags: "i"},
{trigger: /(s)ol/, replacement: "[[0]]olution", options: "t", flags: "i"},
{trigger: /(e)q/, replacement: "[[0]]quation", options: "t", flags: "i"},
{trigger: /(e)qu(i|iv)?/, replacement: "[[0]]quivalen", options: "t", flags: "i"},
{trigger: /(t)ri/, replacement: "[[0]]riangle inequality", options: "t", flags: "i"},
{trigger: /MVT/, replacement: "Mean Value Theorem", options: "t", flags: "i"},
{trigger: /(f)unc?/, replacement: "[[0]]unction", options: "t", flags: "i"},
{trigger: /(s)eq/, replacement: "[[0]]equence", options: "t", flags: "i"},
{trigger: /(s)seq/, replacement: "[[0]]ubsequence", options: "t", flags: "i"},
{trigger: /(p)t(s?)/, replacement: "[[0]]oint[[1]]", options: "t", flags: "i"},
{trigger: /(i)nj/, replacement: "[[0]]njective", options: "t", flags: "i"},
{trigger: /(s)urj/, replacement: "[[0]]urjective", options: "t", flags: "i"},
{trigger: /(b)ij/, replacement: "[[0]]ijective", options: "t", flags: "i"},
{trigger: /(i)nfi/, replacement: "[[0]]nfinite", options: "t", flags: "i"},
{trigger: /(i)nfy/, replacement: "[[0]]nfinity", options: "t", flags: "i"},
{trigger: /(n)bhd/, replacement: "[[0]]eighborhood", options: "t", flags: "i"},
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
{trigger: /(c)pt/, replacement: "[[0]]ompact", options: "t", flags: "i", priority: 1},
{trigger: /(c)onn/, replacement: "[[0]]onnected", options: "t", flags: "i"},
{trigger: /(m)ea/, replacement: "[[0]]easurable", options: "t", flags: "i"},
//{trigger: /(d)ya/, replacement: "[[0]]yadic", options: "t", flags: "i"},
//{trigger: /(s)ubm/, replacement: "[[0]]ubmanifold", options: "t", flags: "i"},
{trigger: /(c)om/, replacement: "[[0]]omplex", options: "t", flags: "i"},
{trigger: /(h)olo?/, replacement: "[[0]]olomorphic", options: "t", flags: "i"},
{trigger: /(m)ero?/, replacement: "[[0]]eromorphic", options: "t", flags: "i"},
{trigger: /(i)sol/, replacement: "[[0]]solated", options: "t", flags: "i"},
{trigger: /(r)em/, replacement: "[[0]]emovable", options: "t", flags: "i"},
{trigger: /(e)ss/, replacement: "[[0]]ssential", options: "t", flags: "i"},
{trigger: /(s)ing?/, replacement: "[[0]]ingularity", options: "t", flags: "i"},
{trigger: /(h)ot/, replacement: "[[0]]omotop", options: "t", flags: "i"},
{trigger: /(c)onf/, replacement: "[[0]]onformal", options: "t", flags: "i"},

// Universal
{trigger: /(D)ef/, replacement: "[[0]]efinition", options: "t", flags: "i"},
{trigger: /(T)hm/, replacement: "[[0]]heorem", options: "t", flags: "i"},
{trigger: /(P)rop/, replacement: "[[0]]roposition", options: "t", flags: "i"},
{trigger: /(S)ys?/, replacement: "[[0]]ystem", options: "t", flags: "i"},
{trigger: /(p)os?/, replacement: "[[0]]ositiv", options: "t", flags: "i"},
{trigger: /(n)eg?/, replacement: "[[0]]egativ", options: "t", flags: "i"},
{trigger: /(c|k)on(s|st)?/, replacement: "[[0]]onstant", options: "t", flags: "i", priority: 1},
{trigger: /(L)og/, replacement: "[[0]]ogarithm", options: "t", flags: "i"},
{trigger: /(S)up/, replacement: "[[0]]upremum", options: "t", flags: "i"},
{trigger: /(I)nf/, replacement: "[[0]]nfimum", options: "t", flags: "i"},
{trigger: /(M)ax/, replacement: "[[0]]aximum", options: "t", flags: "i"},
{trigger: /(M)in/, replacement: "[[0]]inimum", options: "t", flags: "i"},
{trigger: /(D)ia/, replacement: "[[0]]iagonal", options: "t", flags: "i"},
{trigger: /(D)im/, replacement: "[[0]]imension", options: "t", flags: "i"},
{trigger: /(I)so/, replacement: "[[0]]somorphism", options: "t", flags: "i"},
{trigger: /(T)ran?s?/, replacement: "[[0]]ransformation", options: "t", flags: "i"},
{trigger: /(D)ist?/, replacement: "[[0]]istribution", options: "t", flags: "i"},
{trigger: /Cau?/, replacement: "Cauchy", options: "t", flags: "i"},
{trigger: /Lip/, replacement: "Lipschitz", options: "t", flags: "i", priority: 1},
{trigger: /Tay/, replacement: "Taylor", options: "t", flags: "i", priority: 1},
{trigger: /Rie?/, replacement: "Riemann", options: "t", flags: "i"},
{trigger: /Jor/, replacement: "Jordan", options: "t", flags: "i"},
{trigger: /Leb/, replacement: "Lebesgue", options: "t", flags: "i"},
{trigger: /Fou?/, replacement: "Fourier", options: "t", flags: "i"},
{trigger: /Schw?/, replacement: "Schwartz", options: "t", flags: "i"},
{trigger: /Lag?/, replacement: "Lagrange", options: "t", flags: "i"},
{trigger: /Lor?/, replacement: "Lorentz", options: "t", flags: "i"},
{trigger: /CR/, replacement: "Cauchy-Riemann", options: "t", flags: "i"},
{trigger: /EL/, replacement: "Euler-Lagrange", options: "t", flags: "i"},
{trigger: /Carn?/, replacement: "Carnot", options: "t", flags: "i"},
{trigger: /Clau?/, replacement: "Clausius", options: "t", flags: "i"},

// German
{trigger: /Kor/, replacement: "Korollar", options: "t", flags: "i"},
{trigger: /Bsp/, replacement: "Beispiel", options: "t", flags: "i"},
{trigger: /Bem/, replacement: "Bemerkung", options: "t", flags: "i"},
{trigger: /Bew/, replacement: "Beweis", options: "t", flags: "i"},
{trigger: /(z)us/, replacement: "[[0]]usammen", options: "t", flags: "i"},
{trigger: /(b)spw/, replacement: "[[0]]eispielsweise", options: "t", flags: "i"},
{trigger: /(z)B/, replacement: "[[0]]um Beispiel", options: "t", flags: "i"},
{trigger: /(b)zw/, replacement: "[[0]]eziehungsweise", options: "t"},
{trigger: /(v)gl/, replacement: "[[0]]ergleiche", options: "t", flags: "i"},
{trigger: /(K)oeff?/, replacement: "[[0]]oeffizienten", options: "t", flags: "i"},
{trigger: /AWP/, replacement: "Anfangswertproblem", options: "t", flags: "i"},
{trigger: /IS/, replacement: "Inertialsystem", options: "t", flags: "i"},
{trigger: /VR/, replacement: "Vektorraum", options: "t", flags: "i"},
{trigger: /UR/, replacement: "Unterraum", options: "t", flags: "i"},
{trigger: /HR/, replacement: "Hilbertraum", options: "t", flags: "i"},
//{trigger: /ES/, replacement: "Erzeugendensystem", options: "t", flags: "i"},
{trigger: /(l)inu/, replacement: "[[0]]inear unabhängig", options: "t", flags: "i"},
{trigger: /(l)ina/, replacement: "[[0]]inear abhängig", options: "t", flags: "i"},
//{trigger: /(e)d/, replacement: "[[0]]ndlich-dimensional", options: "t", flags: "i"},
//{trigger: /(u)d/, replacement: "[[0]]nendlich-dimensional", options: "t", flags: "i"},
{trigger: /LK/, replacement: "Linearkombination", options: "t", flags: "i"},
{trigger: /(L)GS/, replacement: "[[0]]ineares Gleichungssystem", options: "t", flags: "i"},
{trigger: /GLS/, replacement: "Gleichungssystem", options: "t", flags: "i"},
{trigger: /DGL/, replacement: "Differentialgleichung", options: "t", flags: "i"},
{trigger: /(s)te?/, replacement: "[[0]]tetig", options: "t", flags: "i"},
{trigger: /(g)lm/, replacement: "[[0]]leichmässig", options: "t", flags: "i"},
{trigger: /Abb/, replacement: "Abbildung", options: "t", flags: "i"},
{trigger: /(l)in/, replacement: "[[0]]inear", options: "t", flags: "i"},
{trigger: /(l)iab/, replacement: "[[0]]ineare Abbildung", options: "t", flags: "i"},
{trigger: /(s)a/, replacement: "[[0]]elbst-adjungiert", options: "t", flags: "i"},
//{trigger: /(i)nj/, replacement: "[[0]]njektiv", options: "t", flags: "i"},
//{trigger: /(s)urj/, replacement: "[[0]]urjektiv", options: "t", flags: "i"},
//{trigger: /(b)ij/, replacement: "[[0]]ijektiv", options: "t", flags: "i"},
{trigger: /Pol/, replacement: "Polynom", options: "t", flags: "i"},
{trigger: /NST/, replacement: "Nullstelle", options: "t", flags: "i", priority: 1},
{trigger: /EW/, replacement: "Eigenwert", options: "t", flags: "i"},
{trigger: /EV/, replacement: "Eigenvektor", options: "t", flags: "i"},
//{trigger: /ER/, replacement: "Eigenraum", options: "t", flags: "i"},
{trigger: /(d)b/, replacement: "[[0]]iagonalisierbar", options: "t", flags: "i"},
//{trigger: /JNF/, replacement: "Jordan'sche Normalform", options: "t", flags: "i"},
//{trigger: /(I)PR/, replacement: "[[0]]nnerer Produktraum", options: "t", flags: "i"},
//{trigger: /Pr/, replacement: "Produkt", options: "t", flags: "i"},
//{trigger: /(I)P/, replacement: "[[0]]nneres Produkt", options: "t", flags: "i"},
{trigger: /(o)rth?g/, replacement: "[[0]]rthogonal", options: "t", flags: "i"},
{trigger: /(o)rt(h?)n/, replacement: "[[0]]rthonormal", options: "t", flags: "i"},
{trigger: /ONB/, replacement: "Orthonormalbasis", options: "t", flags: "i"},
{trigger: /HS/, replacement: "Hauptsatz", options: "t", flags: "i"},
{trigger: /QF/, replacement: "Quadraturformel", options: "t", flags: "i"},

// Order numbers
{trigger: /([\d])\.\./, replacement: m => `${m[1]}<sup>${th(m[1])}</sup>`, options: "tA"},
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
{trigger: "Z", replacement: s => `\\begin{align}\n${s.replace(/=/, "& =").replace(/(?<!& )=/g, "\\\\\n & =")}$0\n\\end{align}`, options: "vmA"},
{trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }$1", options: "mA"},
{trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }$1", options: "mA"},
{trigger: "D", replacement: "\\underset{ $0 }{ ${VISUAL} }$1", options: "mA"},
{trigger: "H", replacement: "\\overset{ $0 }{ ${VISUAL} }$1", options: "mA"},
{trigger: "T", replacement: "\\substack{${VISUAL}}$0", options: "mA"},
{trigger: "L", replacement: "\\underline{${VISUAL}}", options: "mA"},
{trigger: "B", replacement: "\\boxed{${VISUAL}}", options: "mA"},
{trigger: "C", replacement: "\\cancel{${VISUAL}}", options: "mA"},
{trigger: "X", replacement: "\\xcancel{${VISUAL}}", options: "mA"},
{trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }$1", options: "mA"},
{trigger: "S", replacement: "\\sqrt{${VISUAL}}", options: "mA"},
{trigger: "M", replacement: "\\lvert ${VISUAL} \\rvert", options: "mA"},
{trigger: "N", replacement: "\\lVert ${VISUAL} \\rVert", options: "mA"},
{trigger: "\(", replacement: "(${VISUAL})", options: "mA"},
{trigger: "\[", replacement: "[${VISUAL}]", options: "mA"},
{trigger: "\{", replacement: "{${VISUAL}}", options: "mA"},

// Brackets
{trigger: /coi/, replacement: "[$0)$1", options: "mA"},
{trigger: /oci/, replacement: "($0]$1", options: "mA"},
{trigger: /set/, replacement: "\\{ $0 \\}$1", options: "mA"},
{trigger: /([\(\[\{])/, replacement: m => `${m[1]}$0${m[1] == "(" ? ")" : String.fromCharCode(m[1].charCodeAt(0)+2)}$1`, options: "mA"},
{trigger: /mod/, replacement: "\\lvert $0 \\rvert$1", options: "mA"},
{trigger: /norm/, replacement: "\\lVert $0 \\rVert$1", options: "mA"},
{trigger: /lr([afc])/, replacement: m => {
  const br = { a: "angle", c: "ceil", f: "floor", };
  return `\\l${br[m[1]]} $0 \\r${br[m[1]]}$1`;
}, options: "mA"},

// Physics
{trigger: /pu/, replacement: "\\pu{$0}$1", options: "mA"},
{trigger: /hba/, replacement: "\\hbar", options: "mA"},
{trigger: /kbb/, replacement: "k_{B}", options: "mA"},
{trigger: /kbt/, replacement: "k_{B}T", options: "mA"},
{trigger: /(Q|W)(in|out)/, replacement: m => `${m[1]}^{\\${m[2] == "in" ? "sw" : "ne"}arrow}`, options: "mA"},
{trigger: /msun|solm/, replacement: "M_{\\odot}", options: "mA"},
{trigger: /dag/, replacement: "^{\\dagger}", options: "mA"},
{trigger: /(bra|ket)/, replacement: "\\[[0]]{$0}$1", options: "mA"},
{trigger: /brk/, replacement: "\\braket{ $0 | $1 }$2", options: "mA"},
// Bra to braket
{trigger: /\\bra\{([^|]+)\|/, replacement: "\\braket{ [[0]] | $0 ", options: "mA"},
{trigger: /\\bra\{(.+)\}([^ ]+)>/, replacement: "\\braket{ [[0]] | [[1]] }$0", options: "mA"},
{trigger: /outp/, replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "mA"},

// Greek letters
{trigger: /@([a-ik-pr-uw-zDFGLOPSTUWXY])/, replacement: m => `\\${gr(m[1])}`, options: "mA"},
{trigger: /:([efkprst])/, replacement: m => `\\var${gr(m[1])}`, options: "mA"},
{trigger: /([atT])\1/, replacement: m => `\\${gr(m[1])}`, options: "mA"},
{trigger: /(l|g)am/, replacement: m => `\\${gr(m[1])}`, options: "mA", flags: "i"},
{trigger: /(o)me/, replacement: "\\[[0]]mega", options: "mA", flags: "i"},
// Add backslash before greek letters and symbols
{trigger: /(?<!\\)(${GREEK}|${SYMBOL})/, replacement: "\\[[0]]", options: "mA"},
// Insert space after greek letters and symbols
{trigger: /\\(${GREEK}|${SYMBOL}|${SHORT_SYMBOL})([A-Za-z])/, replacement: "\\[[0]] [[1]]", options: "mA"},

// Letter decorations
// Sequence elements
{trigger: /([abcfgu-z]|${GREEK} )([i-n]?)(p|m)([1-3])/, replacement: m => `${tr(m[1])}_{${m[2] == "" ? "n" : l(m[2])}${m[3] == "p" ? "+" : "-"}${m[4]}}`, options: "mA"},
// Number and common letter subscript
{trigger: /(((?:\\${DECO}\{)*)(?:[A-Za-z]|\\${GREEK} ?)(\}*))((\d)|([i-n])\6)/, replacement: m => (m[2].match(/\{/g) || []).length == m[3].length ? `${tr(m[1])}_{${m[5] ? m[5] : l(m[6])}}` : `${m[1]}${m[4]}`, options: "mA", priority: -1},
{trigger: /_\{(\d+)\}(\}*)(\d)/, replacement: "_{[[0]][[2]]}[[1]]", options: "mA"},
// {trigger: /\\([PXpx])ii/, replacement: "[[0]]_{i}", options: "mA", priority: 1},
// No subscript for symbols
{trigger: /(\\${SYMBOL}|${SHORT_SYMBOL})(\d)/, replacement: "[[0]] [[1]]", options: "mA"},
// Letter attachments
{trigger: /(\S|(?:\\${GREEK}|${FUNCTION}|${TRIG}|${HYP_TRIG}|${RIGHT}) )(invs|sr|cb)/, replacement: m => `${tr(m[1])}^{${m[2] == "invs" ? "-1" : m[2] == "sr" ? "2" : "3"}}`, options: "mA"},
{trigger: /(\S|\\${GREEK} )(tpd|compl|conj|dual)/, replacement: m => `${tr(m[1])}^{${m[2] == "tpd" ? "\\top" : m[2] == "compl" ? "\\complement" : m[2] == "ani" ? "\\perp" : "*"}}`, options: "mA"},
{trigger: /(\S|\\${GREEK} )sts/, replacement: m => `${tr(m[1])}_\\text{$0}$1`, options: "mA"},
// Convert decorator after letter
// I needed to expand DECO for the second match, as matching it doesn't work for some unknown reason (matching one variable more than once?)
{trigger: /(((?:\\${DECO}\{)*)(?:[A-Za-z]|\\${GREEK} ?)(\}*(?:_\{(?:\d+|[iikmn]|\\ell)\})?\}*))((?:bar|check|dot|ddot|hat|mathring|overline|tilde|vec|widehat|widetilde|cek|dvc|ddvc|lbr|ring|wht|wtd))/, replacement: m => {
  const len = d(m[4]).split(' ').length;
  var dec = "";
  for (const st of d(m[4]).split(' ')) dec += `\\${st}{`;
  return (m[2].match(/\{/g) || []).length == (m[3].match(/\}/g) || []).length - (m[3].match(/\{/g) || []).length ? `${dec}${tr(m[1])}${"}".repeat(len)}` : `${m[1]}\\${m[4]}{$0}$1`;
}, options: "mA"},
// Shortcut for dotting variables
{trigger: /(((?:\\${DECO}\{)*)(?:[A-Za-z]|\\${GREEK})(\}*(?:_\{(?:\d+|[iikmn]|\\ell)\})?\}*))`/, replacement: m => {
  if ((m[2].match(/\{/g) || []).length != (m[3].match(/\}/g) || []).length - (m[3].match(/\{/g) || []).length) return m[1] + m[4];
  const i = m[1].search(/\\d{1,3}ot\{/);
  if (i == -1) m[1] = `\\dot{${tr(m[1])}}`;
  else m[1] = m[1].slice(0,i+1) + "d" + m[1].slice(i+1);
  return m[1];
}, options: "mA"},
// Free standing decorators
{trigger: /(\^|_|;;|,,)/, replacement: m => `${m[1] == ";;" ? "^" : m[1] == ",," ? "_" : m[1]}{$0}$1`, options: "mA"},
{trigger: /(${DECO})/, replacement: "\\[[0]]{$0}$1", options: "mA"},
{trigger: /(cek|lbr|ring|und|wht|wtd)/, replacement: m => `\\${d(m[1])}{$0}$1`, options: "mA"},

// Trigonometric functions
// Add \ before trig functions
{trigger: /(?<!\\)(${TRIG})/, replacement: "\\[[0]]", options: "mA"},
// Insert space after trig functions. Skips letter "h" to allow sinh, cosh, etc
{trigger: /(\\${TRIG})([A-Za-gi-z\d])/, replacement: "[[0]] [[1]]", options: "mA"},
// Insert space after hyperbolic trig functions
{trigger: /(\\${HYP_TRIG})([A-Za-z\d])/, replacement: "[[0]] [[1]]", options: "mA"},
// Define missing trig functions
{trigger: /\\?(${TRIG_NEW}|${HYP_TRIG_NEW})/, replacement: "\\operatorname{[[0]]}", options: "mA"},
// Define missing area hyperbolic trig functions
{trigger: /ar\\(${HYP_TRIG}|${HYP_TRIG_NEW})/, replacement: "\\operatorname{ar[[0]]}", options: "mA", priority: 1},

// Operations
{trigger: /(?<!\\ar)([FGfgh](?:_\{(?:[\dijkmn]|\\ell)\})?)('*)([w-z])/, replacement: "[[0]][[1]]([[2]])", options: "mA"},
{trigger: /([FGfgh](?:_\{(?:[\dijkmn]|\\ell)\})?)('*)\(([w-z])\)(\d)/, replacement: "[[0]][[1]]([[2]]_{[[3]]})", options: "mA"},
{trigger: /fuv/, replacement: "f = u + iv", options: "mA"},
{trigger: /(w|z)(xy|ab)/, replacement: m => `${m[1]} = ${m[2][0]} + i${m[2][1]}`, options: "mA"},
{trigger: /\\gamma([abt])/, replacement: "\\gamma([[0]])", options: "mA", priority: 1},
{trigger: /\\gamma\(([abt])\)(\d)/, replacement: "\\gamma([[0]]_{[[1]]})", options: "mA", priority: 1},
//{trigger: /hom/, replacement: "\\mathrm{Hom}_{${0:K}}(${1:V}, ${2:W})", options: "mA"},
//{trigger: /mx/, replacement: "M_{${0:m} \\times ${1:n}}(${3:K})", options: "mA"},
{trigger: /-1([i-n])/, replacement: m => `(-1)^{${l(m[1])}}`, options: "mA"},
{trigger: /11([i-n])/, replacement: m => `\\mathbb{1}_{${l(m[1])}}`, options: "mA"},
{trigger: /\\mathbb\{1\}_\{(?:[ijkmn]|\\ell)\}([2-9])/, replacement: "\\mathbb{1}_{[[0]]}", options: "mA"},
{trigger: /(C|L)([\di-o])/, replacement: m => `${m[1]}^{${l(o(m[2]))}}`, options: "mA"},
{trigger: /(c?)(p?)([B-Db-d])([RSrs])([W-Zow-z])/, replacement: m => `${m[1] == "c" ? "\\overline{" : ""}${m[3].toUpperCase()}${m[2] == "p" ? "^{*}" : ""}_{${m[4]}}(${o(m[5])})${m[1] == "c" ? "}" : ""}`, options: "mA"},
{trigger: /((?:\\overline\{)?[B-D](?:\^\{\*\})?_\{[RSrs]\})\(([W-Zw-z])\)(\}?)(\d)/, replacement: "[[0]]([[1]]_{[[3]]})[[2]]", options: "mA"},
{trigger: /csv/, replacement: "${0:v}_{${1:1}}, \\dots, ${0:v}_{${3:n}}$4", options: "mA"},
{trigger: /bin/, replacement: "\\binom{$0}{$1}$2", options: "mA"},
{trigger: /te/, replacement: "\\text{$0}$1", options: "m"},
{trigger: /text/, replacement: "\\text{$0}$1", options: "mA"},
{trigger: /m?(bb|bf|cal|rm|scr)/, replacement: "\\math[[0]]{$0}$1", options: "mA", priority: -1},
{trigger: /op/, replacement: "\\operatorname{$0}$1", options: "mA"},
{trigger: /(n?)sq/, replacement: m => `\\sqrt${m[1] == "n" ? "[$0]" : ""}{$1}$2`, options: "mA"},
{trigger: /\/\//, replacement: "\\frac{$0}{$1}$2", options: "mA"},
{trigger: /ee/, replacement: "e^{$0}$1", options: "mA"},
{trigger: /(id)/, replacement: "\\mathrm{[[0]]}", options: "mA"},
{trigger: /(Re|Im|sgn|Tr|End|span|adj|rk|grad|div|rot|vol|spt|Sym|Alt|Arg|ord)/, replacement: "\\operatorname{[[0]]}", options: "mA"},
{trigger: /\\operatorname\{Re\}s/, replacement: "\\operatorname{Res}", options: "mA"},
{trigger: /L\^\{\\infty\}g/, replacement: "\\operatorname{Log}", options: "mA"},

// Special sets
{trigger: /([DNZQRCS])\1/, replacement: "\\mathbb{[[0]]}", options: "mA"},
{trigger: /\\mathbb\{([NZQRCS])\}([2-9a-z+-])/, replacement: "\\mathbb{[[0]]}^{[[1]]}", options: "mA"},
{trigger: /\\mathbb\{N\}0/, replacement: "\\mathbb{N}_{0}", options: "mA"},
{trigger: /\\mathbb\{C\}C/, replacement: "\\hat{\\mathbb{C}}", options: "mA"},
{trigger: /([FMO])\1/, replacement: "\\mathcal{[[0]]}", options: "mA"},
{trigger: /([H])\1/, replacement: "\\mathscr{[[0]]}", options: "mA"},
{trigger: /\\mathbb\{S\}S/, replacement: "\\mathscr{S}", options: "mA"},

// Symbols
// Fix ' usage for derivatives to supress autopair
{trigger: /'/, replacement: "'$0", options: "mA"},
{trigger: /ooo/, replacement: "\\infty", options: "mA"},
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
{trigger: /(x?)mto/, replacement: m => `\\${m[1]}mapsto${m[1] != "" ? "{$0}$1" : ""}`, options: "mA"},
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
{trigger: /cnot/, replacement: "\\centernot", options: "mA"},
{trigger: /nott/, replacement: "\\not", options: "mA"},
{trigger: /(n?)s(p?)set/, replacement: m => `\\${m[1]}su${m[2] == "p" ? "p" : "b"}seteq`, options: "mA", priority: 1},
{trigger: /\\su(b|p)seteqn/, replacement: "\\su[[0]]setneq", options: "mA", priority: 1},
{trigger: /eset/, replacement: "\\varnothing", options: "mA", priority: 1},
{trigger: /(n?)e\\xi sts/, replacement: "\\[[0]]exists", options: "mA", priority: 1},
{trigger: /foral/, replacement: "\\forall", options: "mA"},
{trigger: /=>/, replacement: "\\implies", options: "mA"},
{trigger: /=</, replacement: "\\impliedby", options: "mA"},
{trigger: /===/, replacement: "\\equiv", options: "mA"},
{trigger: /S(Q|q)/, replacement: "\\square", options: "mA"},
{trigger: /S(Q|q)/, replacement: "${ \\square }$", options: "tAw"},
{trigger: /!=/, replacement: "\\neq", options: "mA"},
{trigger: />=/, replacement: "\\geq", options: "mA"},
{trigger: /<=/, replacement: "\\leq", options: "mA"},
{trigger: />>/, replacement: "\\gg", options: "mA"},
{trigger: /<</, replacement: "\\ll", options: "mA"},
{trigger: /~~/, replacement: "\\sim", options: "mA"},
{trigger: /\\sim~/, replacement: "\\approx", options: "mA"},
{trigger: /prop/, replacement: "\\propto", options: "mA"},
{trigger: /nabl/, replacement: "\\nabla", options: "mA"},
{trigger: /del/, replacement: "\\partial", options: "mA"},
{trigger: /ddd/, replacement: "\\mathrm{d}", options: "mA"},
{trigger: /xx/, replacement: "\\times", options: "mA"},
// Convert three spaces into a rendered small space
{trigger: /   /, replacement: " \\, ", options: "mA"},
{trigger: /para/, replacement: "\\parallel", options: "mA"},
{trigger: /(c|k)onst/, replacement: "\\text{[[0]]onst.}", options: "mA"},

// Limits
{trigger: /li([msn])/, replacement: m => `\\lim${m[1] == "s" ? "sup" : m[1] == "n" ? "inf" : ""}_{$\{0:n\} \\to $\{1:\\infty\}} $2`, options: "mA"},
// Sums and products
{trigger: /(ssum|pprod)/, replacement: m => `\\${m[1].slice(1)}_{$\{0:n\} = $\{1:1\}}^{$\{2:\\infty\}} $3`, options: "mA", priority: 1},

// Derivatives
{trigger: /dd([tx-z])/, replacement: "\\frac{\\mathrm{d}$0}{\\mathrm{d}[[0]]}$1", options: "mA"},
{trigger: /([\di-n]?)(pa|de)([A-Za-z]{0,2})/, replacement: m => {
  const d = m[2] == "pa" ? "\\partial" : "\\mathrm{d}";
  const p = m[1] != "" ? `^{${l(m[1])}}` : "";
  const f = m[3].length == 2 ? m[3].charAt(0) : "$0";
  const ds = m[3] != "" ? m[3].slice(-1) : "${1:x}";
  return `\\frac{${d}${p}${m[2] == "pa" && p == "" ? " " : ""}${f}}{${d}${m[2] == "pa" ? " " : ""}${ds}${p}}$2`;
}, options: "m"},
{trigger: /(?<!\\)(pa|de)([A-Za-z])([A-Za-z]{2,})/, replacement: m => {
  const d = m[1] == "pa" ? "\\partial" : "\\mathrm{d}";
  let ds = "";
  for (let c of m[3].slice(1)) {
    ds += ` \\, ${d}${m[1] == "pa" ? " " : ""}${c}`;
  }
  return `\\frac{${d}^{${m[3].length}}${m[2]}}{${d}${m[1] == "pa" ? " " : ""}${m[3].charAt(0)}${ds}}`;
}, options: "m"},

// Integrals
{trigger: /int/, replacement: "\\int $0 \\, \\mathrm{d}${1:x}", options: "mA"},
{trigger: /dint/, replacement: "\\int_{${0:0}}^{${1:\\infty}} $2 \\, \\mathrm{d}${3:x}", options: "mA"},
{trigger: /init/, replacement: "\\int_{-\\infty}^{\\infty} $0 \\, \\mathrm{d}${1:x}", options: "mA"},
{trigger: /gint/, replacement: "\\int_{${0:\\gamma}} $1 \\, \\mathrm{d}${2:x}", options: "mA"},
{trigger: /oint/, replacement: "\\oint", options: "mA"},
{trigger: /(i{2,4})nt/, replacement: "\\[[0]]nt", options: "mA"},
{trigger: /isnt/, replacement: "\\int", options: "mA", priority: 1},
]
