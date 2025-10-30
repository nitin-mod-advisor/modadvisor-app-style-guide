"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { CheckCircle, Info, AlertTriangle, XCircle, LayoutSidebar, ChevronsRight, Home, Settings } from 'lucide-react';

export function ComponentPreviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonStyle = "px-4 py-2 text-sm font-medium transition-transform duration-150 ease-in-out rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring active:scale-[0.98]";

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text">Components Preview</h2>
        
        {/* Buttons */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-text-muted">Buttons</h3>
          <div className="p-6 bg-surface rounded-lg border border-border flex flex-wrap gap-4 items-center">
            <button className={`${buttonStyle} bg-primary text-primary-foreground hover:brightness-110`}>Primary</button>
            <button className={`${buttonStyle} bg-secondary text-secondary-foreground hover:brightness-110`}>Secondary</button>
            <button className={`${buttonStyle} bg-error text-primary-foreground hover:brightness-110`}>Destructive</button>
            <button className={`${buttonStyle} bg-surface-2 text-text-muted cursor-not-allowed`} disabled>Disabled</button>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4 mt-8">
          <h3 className="font-semibold text-lg text-text-muted">Inputs</h3>
          <div className="p-6 bg-surface rounded-lg border border-border space-y-4">
            <Input placeholder="Default" className="bg-surface border-border text-text placeholder:text-text-muted focus:border-ring focus:ring-ring" />
            <Input placeholder="Error state" className="bg-surface border-error text-error placeholder:text-error/70 focus:border-error focus:ring-error" />
            <Input placeholder="Disabled" disabled className="bg-surface-2 border-border text-text-muted cursor-not-allowed" />
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4 mt-8">
          <h3 className="font-semibold text-lg text-text-muted">Card</h3>
          <Card className="bg-surface border-border shadow-sm hover:shadow-md hover:-translate-y-px transition-all">
            <CardHeader>
              <CardTitle className="text-text">Card Title</CardTitle>
              <CardDescription className="text-text-muted">This is a card description.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-text">The card body contains the main content. It is styled using surface and text variables.</p>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        <div className="space-y-4 mt-8">
            <h3 className="font-semibold text-lg text-text-muted">Alerts</h3>
            <div className="p-6 bg-surface rounded-lg border border-border space-y-4">
                <Alert className="border-success" style={{ backgroundColor: `color-mix(in srgb, var(--success) 15%, transparent)` }}>
                    <CheckCircle className="h-4 w-4 text-success" />
                    <AlertTitle className="text-success font-bold">Success</AlertTitle>
                    <AlertDescription className="text-success/90">This is a success message.</AlertDescription>
                </Alert>
                <Alert className="border-info" style={{ backgroundColor: `color-mix(in srgb, var(--info) 15%, transparent)` }}>
                    <Info className="h-4 w-4 text-info" />
                    <AlertTitle className="text-info font-bold">Info</AlertTitle>
                    <AlertDescription className="text-info/90">This is an informational message.</AlertDescription>
                </Alert>
                <Alert className="border-warning" style={{ backgroundColor: `color-mix(in srgb, var(--warning) 15%, transparent)` }}>
                    <AlertTriangle className="h-4 w-4 text-warning" />
                    <AlertTitle className="text-warning font-bold">Warning</AlertTitle>
                    <AlertDescription className="text-warning/90">This is a warning message.</AlertDescription>
                </Alert>
                <Alert className="border-error" style={{ backgroundColor: `color-mix(in srgb, var(--error) 15%, transparent)` }}>
                    <XCircle className="h-4 w-4 text-error" />
                    <AlertTitle className="text-error font-bold">Error</AlertTitle>
                    <AlertDescription className="text-error/90">This is an error message.</AlertDescription>
                </Alert>
            </div>
        </div>

        {/* Table */}
        <div className="space-y-4 mt-8">
            <h3 className="font-semibold text-lg text-text-muted">Table</h3>
            <div className="rounded-lg border border-border overflow-hidden bg-surface">
                <Table>
                    <TableHeader className="bg-surface-2">
                        <TableRow className="border-border">
                            <TableHead className="text-text">User</TableHead>
                            <TableHead className="text-text">Role</TableHead>
                            <TableHead className="text-text">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="border-border hover:bg-surface-2/70">
                            <TableCell className="font-medium text-text">Jane Cooper</TableCell>
                            <TableCell className="text-text-muted">Admin</TableCell>
                            <TableCell className="text-success">Active</TableCell>
                        </TableRow>
                        <TableRow className="border-border hover:bg-surface-2/70 border-l-2 border-l-primary">
                            <TableCell className="font-medium text-text">John Doe</TableCell>
                            <TableCell className="text-text-muted">Contributor</TableCell>
                            <TableCell className="text-success">Active</TableCell>
                        </TableRow>
                        <TableRow className="border-border hover:bg-surface-2/70">
                            <TableCell className="font-medium text-text">Cody Fisher</TableCell>
                            <TableCell className="text-text-muted">Viewer</TableCell>
                            <TableCell className="text-warning">Inactive</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>

        {/* Modal */}
        <div className="space-y-4 mt-8">
            <h3 className="font-semibold text-lg text-text-muted">Modal</h3>
            <div className="p-6 bg-surface rounded-lg border border-border">
                <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogContent className="bg-surface border-border shadow-lg sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle className="text-text">Modal Title</DialogTitle>
                            <DialogDescription className="text-text-muted">
                                This is a modal dialog. The overlay uses the --overlay variable.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="py-4 text-text">
                            Modal content goes here.
                        </div>
                        <DialogFooter>
                            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                            <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>

        {/* Sidebar & Header */}
        <div className="space-y-4 mt-8">
            <h3 className="font-semibold text-lg text-text-muted">Sidebar & Header</h3>
            <div className="rounded-lg border border-border overflow-hidden h-96 flex flex-col bg-surface">
                <header className="h-14 flex-shrink-0 px-4 flex items-center justify-between border-b border-border bg-surface">
                    <h4 className="font-semibold text-text">Header</h4>
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">U</div>
                </header>
                <div className="flex flex-1 min-h-0">
                    <aside className="w-56 flex flex-col p-2 bg-surface border-r border-border">
                        <nav className="flex-1 space-y-1">
                            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-text bg-surface-2 border-l-2 border-primary">
                                <Home className="w-4 h-4 text-primary" /> Dashboard
                            </a>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-text-muted hover:bg-surface-2">
                                <Settings className="w-4 h-4" /> Settings
                            </a>
                        </nav>
                    </aside>
                    <main className="flex-1 p-4 bg-bg">
                        <p className="text-text-muted text-sm">Main content area</p>
                    </main>
                </div>
            </div>
        </div>

      </section>
    </div>
  )
}
