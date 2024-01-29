import { authMiddleware } from '@clerk/nextjs';

/**
 * Check which pages are public and which need to hide behind authentication.
 */
export default authMiddleware({
  publicRoutes: [
    '/',
  ],
  ignoredRoutes: ['/api/webhook']
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};
