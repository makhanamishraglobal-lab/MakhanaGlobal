import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Products from "@/pages/Products";
import Bulk from "@/pages/Bulk";
import ContactForm from "@/components/site/ContactForm";
import { products, productNames } from "@/lib/products";

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("product catalogue", () => {
  it("defines the ten grades from the client price list", () => {
    expect(products).toHaveLength(10);
    expect(productNames).toContain("6+ Handpicked Supreme");
    expect(productNames).toContain("4+ Exclusive Grade");
    const supreme = products.find((p) => p.name === "6+ Handpicked Supreme");
    expect(supreme?.pricePerKg).toBe(1300);
    expect(supreme?.type).toBe("Hand Pick");
  });
});

describe("Products page", () => {
  it("renders every grade with its price, description and package artwork", () => {
    renderWithRouter(<Products />);
    for (const p of products) {
      expect(screen.getAllByText(p.name).length).toBeGreaterThan(0);
      expect(screen.getByText(p.description)).toBeInTheDocument();
      expect(screen.getByRole("img", { name: `${p.name} package` })).toBeInTheDocument();
    }
    expect(screen.getAllByText("₹1,300 / kg").length).toBeGreaterThan(0);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("no longer shows the old retail products", () => {
    renderWithRouter(<Products />);
    expect(screen.queryByText(/Roasted Snack Pack/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Masala Makhana Pack/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Family Pouch/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Grade A - Large/i)).not.toBeInTheDocument();
  });
});

describe("Bulk enquiry form", () => {
  it("has a Grade select but no Type or Packaging fields", () => {
    renderWithRouter(<Bulk />);
    const form = document.querySelector("form")!;
    expect(within(form).getByText("Grade")).toBeInTheDocument();
    expect(within(form).queryByText("Type")).not.toBeInTheDocument();
    expect(within(form).queryByText("Packaging")).not.toBeInTheDocument();
    expect(form.querySelector('[name="roast"]')).toBeNull();
    expect(form.querySelector('[name="packaging"]')).toBeNull();
  });

  it("offers every product as a grade option", () => {
    renderWithRouter(<Bulk />);
    const gradeSelect = document.querySelector('select[name="grade"]')!;
    const optionValues = Array.from(gradeSelect.querySelectorAll("option")).map((o) => o.getAttribute("value"));
    for (const name of productNames) {
      expect(optionValues).toContain(name);
    }
  });
});

describe("Contact form", () => {
  it("includes a Product / Grade selector with the product list", () => {
    renderWithRouter(<ContactForm />);
    expect(screen.getByText("Product / Grade")).toBeInTheDocument();
    const gradeSelect = document.querySelector('select[name="grade"]')!;
    const optionValues = Array.from(gradeSelect.querySelectorAll("option")).map((o) => o.getAttribute("value"));
    expect(optionValues).toContain("Not sure yet");
    for (const name of productNames) {
      expect(optionValues).toContain(name);
    }
  });
});
