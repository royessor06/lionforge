import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez renseigner tous les champs obligatoires (nom, email, message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    // In production, this can forward to email service / CRM / Slack webhook
    console.log("[LionForge Contact Submission]", {
      name,
      email,
      company: company || "N/A",
      projectType: projectType || "Général",
      budget: budget || "Non défini",
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Demande reçue avec succès ! L'équipe LionForge étudie votre cahier des charges et vous répond sous 24h ouvrées.",
    });
  } catch (error) {
    console.error("Erreur serveur contact:", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue. Veuillez nous contacter directement par email." },
      { status: 500 }
    );
  }
}
