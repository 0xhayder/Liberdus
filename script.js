// Liberdus - Vanilla JS

const FEATURES = [
  [
    "Quantum-resistant encryption",
    "Built with both conventional and post-quantum algorithms in parallel. Your messages stay private even when today's cryptography no longer holds up.",
  ],
  [
    "A username is your identity",
    "No phone number, no email, no government ID. Pick a username, generate a key, and that's your account. You hold it. We can't reset it.",
  ],
  [
    "No central servers",
    "Messages route through a decentralized mesh of validators. There is no company database to hack, no server to subpoena, no operator with the power to read along.",
  ],
  [
    "Built-in payments",
    "LIB tokens attach to any message in a single on-chain transaction. Send words and value together - not a payment app on the side.",
  ],
];

const STEPS = [
  [
    "01",
    "Download the app",
    "Get Liberdus from the App Store, Google Play, or build it from source. It's free and open source.",
  ],
  [
    "02",
    "Pick a username",
    "No phone number. No email. No verification codes. Just choose a name and the app generates your cryptographic identity.",
  ],
  [
    "03",
    "Start messaging",
    "Send encrypted messages and LIB payments to anyone with a Liberdus username. That's it - you're on the network.",
  ],
];

const WHY_ITEMS = [
  ["You hold the keys", "Accounts live on your device. No company has them."],
  ["No metadata collected", "We don't see who you talk to. We can't, technically."],
  ["No off switch", "Censorship requires disabling the internet itself."],
];

const FAQ_ITEMS = [
  [
    "What is Liberdus?",
    "A decentralized messaging app with built-in payments. Quantum-resistant encryption. No central servers. No metadata collected or sold. Just messages between people, the way it should be.",
    true,
  ],
  [
    "Do I need a phone number or email?",
    "No. Pick a username and the app generates your cryptographic identity locally. Nothing is shared with us - there's no 'us' to share it with.",
    false,
  ],
  [
    "How is it actually decentralized?",
    "Built on Shardus, a protocol for dynamic state sharding. Messages route through a mesh of independent validators. No company owns the network. There is no off switch.",
    false,
  ],
  [
    "Is it really free?",
    "Sending messages to your contacts is free. Strangers messaging you cold pay a small fee - that fee goes to you, not to us.",
    false,
  ],
  [
    "Is the code open source?",
    "Every line running on your device is published on GitHub. No compiled blobs, no closed components. Inspect what you run.",
    false,
  ],
  [
    "When does mainnet launch?",
    "Testnet is live now with real validator rewards. Mainnet launches in 2026 with full token economy and production stability.",
    false,
  ],
];

const FOOTER_GROUPS = [
  [
    "Product",
    [
      ["Download", "https://liberdus.com"],
      ["Tokenomics", null],
      ["Testnet", "https://liberdus.com"],
    ],
  ],
  [
    "Company",
    [
      ["About", null],
      ["Team", null],
      ["Roadmap", null],
    ],
  ],
  [
    "Community",
    [
      ["Discord", "https://discord.gg/2cpJzFnwCR"],
      ["Twitter", "https://x.com/liberdus"],
      ["YouTube", "https://www.youtube.com/@Liberdus"],
      ["Substack", "https://liberdus.substack.com"],
    ],
  ],
  [
    "Developers",
    [
      ["GitHub", "https://github.com/Liberdus"],
      ["Validator Setup", "https://github.com/Liberdus/validator-dashboard"],
      ["Contribute", "https://github.com/Liberdus"],
    ],
  ],
];

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);

  for (const [key, value] of Object.entries(attrs)) {
    if (key === "class") {
      node.className = value;
    } else if (key === "html") {
      node.innerHTML = value;
    } else {
      node.setAttribute(key, value);
    }
  }

  for (const child of children) {
    if (child == null) continue;
    node.appendChild(
      typeof child === "string" ? document.createTextNode(child) : child
    );
  }

  return node;
}

const featuresList = document.getElementById("featuresList");
FEATURES.forEach(([title, desc], index) => {
  const row = el(
    "div",
    { class: "feature-row reveal" },
    el("span", { class: "num" }, `0${index + 1}`),
    el("span", { class: "title" }, title),
    el("span", { class: "desc" }, desc)
  );

  featuresList.appendChild(row);
});

const whyList = document.getElementById("whyList");
WHY_ITEMS.forEach(([title, desc]) => {
  whyList.appendChild(
    el(
      "div",
      { class: "why-item" },
      el("div", { class: "why-item-title" }, title),
      el("div", { class: "why-item-desc" }, desc)
    )
  );
});

const howGrid = document.getElementById("howGrid");
const howMobile = document.getElementById("howMobile");
STEPS.forEach(([num, title, desc]) => {
  howGrid.appendChild(
    el(
      "div",
      { class: "how-card reveal" },
      el("div", { class: "how-card-num" }, num),
      el("h3", {}, title),
      el("p", {}, desc)
    )
  );

  howMobile.appendChild(
    el(
      "div",
      { class: "how-mobile-step reveal" },
      el("div", { class: "how-mobile-num" }, num),
      el(
        "div",
        { class: "how-mobile-body" },
        el("h3", {}, title),
        el("p", {}, desc)
      )
    )
  );
});

const faqList = document.getElementById("faqList");
FAQ_ITEMS.forEach(([question, answer, openInitially]) => {
  const item = el("div", {
    class: `faq-item${openInitially ? " open" : ""}`,
  });
  const button = el(
    "button",
    {
      class: "faq-btn",
      type: "button",
      "aria-expanded": String(openInitially),
    },
    el("span", {}, question),
    el("span", { class: "faq-icon", "aria-hidden": "true" }, "+")
  );
  const body = el("div", { class: "faq-body" }, el("p", {}, answer));

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  item.appendChild(button);
  item.appendChild(body);
  faqList.appendChild(item);
});

const footerGroups = document.getElementById("footerGroups");
FOOTER_GROUPS.forEach(([label, links]) => {
  const linksWrap = el("div", { class: "footer-group-links" });

  links.forEach(([text, href]) => {
    const node = href
      ? el("a", { href, target: "_blank", rel: "noreferrer" }, text)
      : el("span", { class: "is-placeholder" }, text);

    linksWrap.appendChild(node);
  });

  footerGroups.appendChild(
    el(
      "div",
      {},
      el("div", { class: "footer-group-label" }, label),
      linksWrap
    )
  );
});

document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("navbar");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 48);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

function setMenu(open) {
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", String(open));
  mobileMenu.classList.toggle("open", open);
  nav.classList.toggle("menu-open", open);
  document.body.style.overflow = open ? "hidden" : "";
}

hamburger.addEventListener("click", () => {
  setMenu(!mobileMenu.classList.contains("open"));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
