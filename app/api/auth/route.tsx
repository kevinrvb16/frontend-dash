import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request: Request) {
  const { email, password } = await request.json();
  
  if (email === 'admin@exemplo.com' && password === '123456') {
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    
    return NextResponse.json({ token });
  }
  
  return NextResponse.json(
    { error: 'Credenciais inválidas' },
    { status: 401 }
  );
}