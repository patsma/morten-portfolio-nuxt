import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomWiggle } from "gsap/CustomWiggle";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, MorphSVGPlugin, ScrollToPlugin, GSDevTools, CustomBounce, CustomEase, CustomWiggle);