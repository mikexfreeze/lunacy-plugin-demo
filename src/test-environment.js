export default function isBrowser() {

  // Check if the environment is Node.js
  if (typeof process === "object" && typeof require === "function") {
    console.log('is node')
  }

  // Check if the environment is a
  // Service worker
  if (typeof importScripts === "function") {
    console.log('is worker')
  }

  // Check if the environment is a Browser
  if (typeof window === "object") {
    console.log('is browser')
  }
}